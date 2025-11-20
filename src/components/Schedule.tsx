import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const schedule = [
  {
    day: 'Понедельник',
    classes: [
      { time: '18:00 - 19:30', title: 'Лезгинка для начинающих', instructor: 'Магомед Алиев' },
      { time: '19:45 - 21:15', title: 'Барабаны для продолжающих', instructor: 'Руслан Гаджиев' },
    ],
  },
  {
    day: 'Среда',
    classes: [
      { time: '17:00 - 18:30', title: 'Детская лезгинка (7-12 лет)', instructor: 'Айша Магомедова' },
      { time: '18:45 - 20:15', title: 'Лезгинка для продолжающих', instructor: 'Магомед Алиев' },
      { time: '20:30 - 22:00', title: 'Барабаны для начинающих', instructor: 'Руслан Гаджиев' },
    ],
  },
  {
    day: 'Пятница',
    classes: [
      { time: '18:00 - 19:30', title: 'Профессиональная лезгинка', instructor: 'Магомед Алиев' },
      { time: '19:45 - 21:15', title: 'Барабанный ансамбль', instructor: 'Руслан Гаджиев' },
    ],
  },
  {
    day: 'Суббота',
    classes: [
      { time: '11:00 - 12:30', title: 'Семейная лезгинка', instructor: 'Айша Магомедова' },
      { time: '13:00 - 14:30', title: 'Барабаны для начинающих', instructor: 'Руслан Гаджиев' },
      { time: '15:00 - 16:30', title: 'Лезгинка для всех уровней', instructor: 'Магомед Алиев' },
    ],
  },
  {
    day: 'Воскресенье',
    classes: [
      { time: '12:00 - 13:30', title: 'Детские барабаны (8-14 лет)', instructor: 'Руслан Гаджиев' },
      { time: '14:00 - 15:30', title: 'Открытое занятие (все направления)', instructor: 'Вся команда' },
    ],
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Расписание занятий
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите удобное время для занятий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {schedule.map((day, index) => (
            <Card
              key={day.day}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="bg-gradient-hero text-white">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" size={24} />
                  {day.day}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {day.classes.map((classItem, classIndex) => (
                  <div
                    key={classIndex}
                    className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-primary mb-1">
                          {classItem.time}
                        </div>
                        <div className="font-medium mb-1">{classItem.title}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Icon name="User" size={14} />
                          {classItem.instructor}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-accent/10 border-accent">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Icon name="Info" size={24} className="text-accent mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold mb-2">Важная информация:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Первое занятие бесплатно для новых учеников</li>
                    <li>• Приходите за 10 минут до начала занятия</li>
                    <li>• Удобная одежда и обувь обязательны</li>
                    <li>• Возможны изменения в расписании — уточняйте у администратора</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
