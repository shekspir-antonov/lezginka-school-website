import json
import os
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Handle dance school enrollment submissions
    Args: event with httpMethod, body; context with request_id
    Returns: HTTP response with enrollment confirmation
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        
        full_name = body_data.get('full_name', '')
        phone = body_data.get('phone', '')
        email = body_data.get('email', '')
        direction = body_data.get('direction', '')
        age = body_data.get('age')
        experience_level = body_data.get('experience_level', '')
        message = body_data.get('message', '')
        
        if not full_name or not phone or not direction:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Имя, телефон и направление обязательны'})
            }
        
        dsn = os.environ.get('DATABASE_URL')
        conn = psycopg2.connect(dsn)
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        
        cursor.execute(
            "INSERT INTO enrollments (full_name, phone, email, direction, age, experience_level, message) "
            "VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING id",
            (full_name, phone, email, direction, age, experience_level, message)
        )
        
        result = cursor.fetchone()
        conn.commit()
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': True,
                'enrollment_id': result['id'],
                'message': 'Заявка успешно отправлена!'
            })
        }
    
    if method == 'GET':
        dsn = os.environ.get('DATABASE_URL')
        conn = psycopg2.connect(dsn)
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        
        cursor.execute(
            "SELECT id, full_name, direction, created_at FROM enrollments ORDER BY created_at DESC LIMIT 10"
        )
        
        enrollments = cursor.fetchall()
        cursor.close()
        conn.close()
        
        for enrollment in enrollments:
            enrollment['created_at'] = enrollment['created_at'].isoformat()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'enrollments': enrollments})
        }
    
    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'})
    }
