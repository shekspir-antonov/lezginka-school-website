import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const galleryImages = [
  {
    url: 'https://cdn.poehali.dev/projects/8fc3038c-2d23-4be7-b7f5-6b06f472a092/files/92468e78-bbdf-4038-8b36-8f554693af3a.jpg',
    title: 'Лезгинка - мужской танец',
    category: 'dance',
  },
  {
    url: 'https://cdn.poehali.dev/projects/8fc3038c-2d23-4be7-b7f5-6b06f472a092/files/e5b9940f-ef8a-424c-a756-0fdfedd017d3.jpg',
    title: 'Игра на кавказских барабанах',
    category: 'drums',
  },
  {
    url: 'https://cdn.poehali.dev/projects/8fc3038c-2d23-4be7-b7f5-6b06f472a092/files/2cf8f643-4433-4c0c-85b5-fed356a464f0.jpg',
    title: 'Наша студия',
    category: 'studio',
  },
  {
    url: 'https://cdn.poehali.dev/projects/8fc3038c-2d23-4be7-b7f5-6b06f472a092/files/92468e78-bbdf-4038-8b36-8f554693af3a.jpg',
    title: 'Выступление учеников',
    category: 'dance',
  },
  {
    url: 'https://cdn.poehali.dev/projects/8fc3038c-2d23-4be7-b7f5-6b06f472a092/files/e5b9940f-ef8a-424c-a756-0fdfedd017d3.jpg',
    title: 'Барабанный ансамбль',
    category: 'drums',
  },
  {
    url: 'https://cdn.poehali.dev/projects/8fc3038c-2d23-4be7-b7f5-6b06f472a092/files/2cf8f643-4433-4c0c-85b5-fed356a464f0.jpg',
    title: 'Групповое занятие',
    category: 'studio',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Галерея
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Моменты из жизни нашей школы
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
