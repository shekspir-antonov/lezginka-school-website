import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const directions = [
  {
    title: 'Лезгинка',
    emoji: '💃',
    description: 'Традиционный кавказский танец, полный энергии и грации',
    image: 'https://cdn.poehali.dev/projects/8fc3038c-2d23-4be7-b7f5-6b06f472a092/files/92468e78-bbdf-4038-8b36-8f554693af3a.jpg',
    features: [
      'Развитие пластики и координации',
      'Изучение традиционных движений',
      'Выступления на мероприятиях',
      'Работа в команде',
    ],
    levels: ['Начинающие', 'Продолжающие', 'Профессионалы'],
  },
  {
    title: 'Кавказские барабаны',
    emoji: '🥁',
    description: 'Овладейте искусством игры на дхоле и других кавказских ударных',
    image: 'https://cdn.poehali.dev/projects/8fc3038c-2d23-4be7-b7f5-6b06f472a092/files/e5b9940f-ef8a-424c-a756-0fdfedd017d3.jpg',
    features: [
      'Изучение ритмических паттернов',
      'Техника игры на дхоле',
      'Импровизация и композиция',
      'Ансамблевая игра',
    ],
    levels: ['Начинающие', 'Продолжающие', 'Мастера'],
  },
];

export default function Directions() {
  const scrollToEnroll = () => {
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="directions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Наши направления
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите направление, которое зажжёт в вас огонь кавказской культуры
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {directions.map((direction, index) => (
            <Card
              key={direction.title}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={direction.image}
                  alt={direction.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-6xl">{direction.emoji}</div>
              </div>

              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  {direction.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {direction.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    Что вы получите:
                  </h4>
                  <ul className="space-y-2">
                    {direction.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Icon name="Sparkles" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Users" size={20} className="text-primary" />
                    Уровни подготовки:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {direction.levels.map((level) => (
                      <span
                        key={level}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={scrollToEnroll}
                  className="w-full bg-gradient-hero text-white hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на пробное занятие
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
