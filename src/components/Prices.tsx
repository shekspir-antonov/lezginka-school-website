import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const pricingPlans = [
  {
    name: 'Пробное занятие',
    price: 'Бесплатно',
    period: 'одно занятие',
    description: 'Познакомьтесь с нашей школой',
    features: [
      'Одно занятие на выбор',
      'Знакомство с преподавателями',
      'Консультация по программе',
      'Возможность посетить 2 направления',
    ],
    icon: 'Sparkles',
    highlight: false,
  },
  {
    name: 'Разовое посещение',
    price: '800₽',
    period: 'за занятие',
    description: 'Гибкий график посещений',
    features: [
      'Одно занятие 1,5 часа',
      'Любое направление на выбор',
      'Без привязки к расписанию',
      'Действует 30 дней',
    ],
    icon: 'Ticket',
    highlight: false,
  },
  {
    name: 'Абонемент 8 занятий',
    price: '5 600₽',
    period: '700₽ за занятие',
    description: 'Оптимальный вариант для регулярных тренировок',
    features: [
      '8 занятий по 1,5 часа',
      'Экономия 800₽',
      'Действует 60 дней',
      'Можно заморозить на 14 дней',
      'Возможность переноса занятий',
    ],
    icon: 'Trophy',
    highlight: true,
  },
  {
    name: 'Абонемент 12 занятий',
    price: '7 800₽',
    period: '650₽ за занятие',
    description: 'Максимальная экономия',
    features: [
      '12 занятий по 1,5 часа',
      'Экономия 1 800₽',
      'Действует 90 дней',
      'Можно заморозить на 21 день',
      'Приоритетная запись',
      'Скидка 10% на второе направление',
    ],
    icon: 'Crown',
    highlight: false,
  },
];

export default function Prices() {
  const scrollToEnroll = () => {
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="prices" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Цены и абонементы
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий формат занятий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                plan.highlight ? 'border-primary border-2 shadow-lg' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-gradient-hero text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Популярный
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center">
                  <Icon name={plan.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-gradient">{plan.price}</div>
                  <div className="text-sm text-muted-foreground mt-1">{plan.period}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Icon
                        name="CheckCircle2"
                        size={18}
                        className="text-accent mt-0.5 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToEnroll}
                  className={`w-full ${
                    plan.highlight
                      ? 'bg-gradient-hero text-white hover:opacity-90'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                  size="lg"
                >
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-hero text-white">
            <CardContent className="pt-6">
              <div className="text-center">
                <Icon name="Gift" size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Специальные предложения</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="bg-white/10 rounded-lg p-4">
                    <Icon name="Users" size={24} className="mb-2" />
                    <h4 className="font-semibold mb-1">Семейная скидка</h4>
                    <p className="text-sm opacity-90">
                      При записи 2+ членов семьи — скидка 15% на все абонементы
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <Icon name="GraduationCap" size={24} className="mb-2" />
                    <h4 className="font-semibold mb-1">Студентам</h4>
                    <p className="text-sm opacity-90">
                      Скидка 10% по студенческому билету на все абонементы
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
