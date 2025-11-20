import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const navigationLinks = [
  { name: 'Главная', href: '#hero' },
  { name: 'Направления', href: '#directions' },
  { name: 'Расписание', href: '#schedule' },
  { name: 'Цены', href: '#prices' },
  { name: 'Галерея', href: '#gallery' },
  { name: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navigationLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl animate-float">🏔️</div>
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient">
                Ритмы Гор
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                Школа лезгинки и барабанов
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                onClick={() => scrollToSection(link.href)}
                className={`relative transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Button>
            ))}
            <Button
              onClick={() => scrollToSection('#enroll')}
              className="ml-4 bg-gradient-hero text-white hover:opacity-90 transition-opacity"
            >
              Записаться
            </Button>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigationLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant={activeSection === link.href.substring(1) ? 'default' : 'ghost'}
                    onClick={() => scrollToSection(link.href)}
                    className="justify-start text-lg"
                  >
                    {link.name}
                  </Button>
                ))}
                <Button
                  onClick={() => scrollToSection('#enroll')}
                  className="mt-4 bg-gradient-hero text-white hover:opacity-90 transition-opacity text-lg py-6"
                >
                  Записаться на занятие
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
