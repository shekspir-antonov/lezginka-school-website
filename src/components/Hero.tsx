import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToEnroll = () => {
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-float" />
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8 animate-fade-in">
            <div className="text-7xl md:text-9xl mb-6 animate-float">🏔️</div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ритмы Гор
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Школа лезгинки и кавказских барабанов
          </p>

          <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Откройте для себя энергию кавказских танцев и ритмов в самом сердце Санкт-Петербурга
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button
              onClick={scrollToEnroll}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
            >
              <Icon name="Sparkles" className="mr-2" size={24} />
              Записаться на занятие
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('directions');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              <Icon name="Music" className="mr-2" size={24} />
              Узнать больше
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-lg text-white/80">лет опыта</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-lg text-white/80">учеников</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '1.4s' }}>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg text-white/80">наград</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={40} className="text-white" />
      </div>
    </section>
  );
}
