-- Создание таблицы для записи на занятия
CREATE TABLE IF NOT EXISTS enrollments (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    direction VARCHAR(100) NOT NULL,
    age INTEGER,
    experience_level VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индекса для быстрого поиска по направлению
CREATE INDEX idx_enrollments_direction ON enrollments(direction);
CREATE INDEX idx_enrollments_created_at ON enrollments(created_at DESC);