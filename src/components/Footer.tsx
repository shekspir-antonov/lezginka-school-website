import Icon from '@/components/ui/icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">🏔️</div>
              <div>
                <h3 className="text-2xl font-bold">Ритмы Гор</h3>
                <p className="text-sm text-white/80">Школа лезгинки и барабанов</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Откройте для себя магию кавказских танцев и ритмов. Приходите на пробное занятие бесплатно!
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Быстрые ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#directions" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" size={16} />
                  Направления
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" size={16} />
                  Расписание
                </a>
              </li>
              <li>
                <a href="#prices" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" size={16} />
                  Цены
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <Icon name="ChevronRight" size={16} />
                  Галерея
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Санкт-Петербург, ул. Рубинштейна, д. 15/17</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={18} className="flex-shrink-0" />
                <a href="tel:+78125550123" className="text-white/80 hover:text-white transition-colors">
                  +7 (812) 555-01-23
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={18} className="flex-shrink-0" />
                <a href="mailto:info@ritmygor.ru" className="text-white/80 hover:text-white transition-colors">
                  info@ritmygor.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/80">
            © {currentYear} Ритмы Гор. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/ritmygor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover:scale-110"
            >
              <Icon name="Instagram" size={24} />
            </a>
            <a
              href="https://facebook.com/ritmygor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover:scale-110"
            >
              <Icon name="Facebook" size={24} />
            </a>
            <a
              href="https://youtube.com/@ritmygor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover:scale-110"
            >
              <Icon name="Youtube" size={24} />
            </a>
            <a
              href="https://t.me/ritmygor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover:scale-110"
            >
              <Icon name="Send" size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
