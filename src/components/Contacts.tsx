import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const contacts = [
  {
    icon: 'MapPin',
    title: 'Адрес',
    content: 'Санкт-Петербург, ул. Рубинштейна, д. 15/17',
    action: 'Показать на карте',
    link: 'https://yandex.ru/maps/?text=Санкт-Петербург, ул. Рубинштейна, д. 15/17',
  },
  {
    icon: 'Phone',
    title: 'Телефон',
    content: '+7 (812) 555-01-23',
    action: 'Позвонить',
    link: 'tel:+78125550123',
  },
  {
    icon: 'Mail',
    title: 'Email',
    content: 'info@ritmygor.ru',
    action: 'Написать',
    link: 'mailto:info@ritmygor.ru',
  },
  {
    icon: 'Clock',
    title: 'Время работы',
    content: 'Пн-Вс: 10:00 - 22:00',
    action: null,
    link: null,
  },
];

const socialLinks = [
  { icon: 'Instagram', name: 'Instagram', link: 'https://instagram.com/ritmygor', color: 'hover:text-pink-600' },
  { icon: 'Facebook', name: 'Facebook', link: 'https://facebook.com/ritmygor', color: 'hover:text-blue-600' },
  { icon: 'Youtube', name: 'YouTube', link: 'https://youtube.com/@ritmygor', color: 'hover:text-red-600' },
  { icon: 'Send', name: 'Telegram', link: 'https://t.me/ritmygor', color: 'hover:text-blue-500' },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Контакты
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы всегда рады ответить на ваши вопросы
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center">
                    <Icon name={contact.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{contact.title}</h3>
                  <p className="text-muted-foreground mb-4">{contact.content}</p>
                  {contact.action && contact.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={contact.link} target="_blank" rel="noopener noreferrer">
                        {contact.action}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="h-[400px]">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=30.336658,59.929491&z=16&l=map&pt=30.336658,59.929491,pm2rdm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Карта"
                  className="w-full h-full"
                />
              </div>

              <div className="p-8 bg-muted/30 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Как нас найти</h3>
                <div className="space-y-4 text-muted-foreground mb-6">
                  <p className="flex items-start gap-2">
                    <Icon name="Train" size={20} className="mt-0.5 text-primary flex-shrink-0" />
                    <span>Метро «Достоевская» или «Владимирская» — 7 минут пешком</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Icon name="Bus" size={20} className="mt-0.5 text-primary flex-shrink-0" />
                    <span>Автобусы: 3, 22, 27 — остановка «Ул. Рубинштейна»</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Icon name="ParkingCircle" size={20} className="mt-0.5 text-primary flex-shrink-0" />
                    <span>Парковка есть во дворе и на соседних улицах</span>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Следите за нами в соцсетях:</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="icon"
                        asChild
                        className={`hover:scale-110 transition-all ${social.color}`}
                      >
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                        >
                          <Icon name={social.icon as any} size={20} />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
