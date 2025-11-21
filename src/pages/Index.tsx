import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  const rooms = [
    {
      title: 'Люкс Премиум',
      description: 'Роскошный номер с панорамным видом на город',
      image: 'https://cdn.poehali.dev/projects/d5b7a30d-5139-4e76-86d2-4778460e38c7/files/462bbce0-9c24-40cf-9535-09c162da11a2.jpg',
      price: '25 000 ₽'
    },
    {
      title: 'Апартаменты Делюкс',
      description: 'Просторные апартаменты с отдельной гостиной',
      image: 'https://cdn.poehali.dev/projects/d5b7a30d-5139-4e76-86d2-4778460e38c7/files/3a438147-3673-4c96-9b13-4b6e356f72a5.jpg',
      price: '35 000 ₽'
    },
    {
      title: 'Королевский Номер',
      description: 'Эксклюзивный номер с премиальным сервисом',
      image: 'https://cdn.poehali.dev/projects/d5b7a30d-5139-4e76-86d2-4778460e38c7/files/6a9278eb-a920-4475-a1d5-9c4afc1712fe.jpg',
      price: '50 000 ₽'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Royal Palace</h1>
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center animate-fade-in-slow">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-primary">
            Royal Palace Hotel
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя мир роскоши и элегантности в сердце города
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('gallery')}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Посмотреть номера
            </Button>
            <Button
              onClick={() => scrollToSection('contacts')}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Забронировать
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 border border-primary/30 rounded-lg hover:border-primary transition-all duration-300 hover:scale-105">
              <Icon name="Star" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Премиум Сервис</h3>
              <p className="text-muted-foreground">Индивидуальный подход к каждому гостю</p>
            </div>
            <div className="p-6 border border-primary/30 rounded-lg hover:border-primary transition-all duration-300 hover:scale-105">
              <Icon name="MapPin" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Центр Города</h3>
              <p className="text-muted-foreground">Идеальное расположение для бизнеса и отдыха</p>
            </div>
            <div className="p-6 border border-primary/30 rounded-lg hover:border-primary transition-all duration-300 hover:scale-105">
              <Icon name="Clock" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">24/7</h3>
              <p className="text-muted-foreground">Круглосуточная служба консьержа</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-primary">
            Наши Номера
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Изысканные интерьеры и непревзойденный комфорт
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card
                key={index}
                className="overflow-hidden border-primary/20 hover:border-primary transition-all duration-500 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{room.title}</h3>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{room.price}</span>
                    <Button
                      onClick={() => scrollToSection('contacts')}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Забронировать
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-primary">
            Свяжитесь с Нами
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Мы всегда рады ответить на ваши вопросы
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@royalpalace.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">
                    Москва, ул. Тверская, д. 1<br />
                    метро Охотный ряд
                  </p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-primary/30 focus:border-primary"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-primary/30 focus:border-primary"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card border-primary/30 focus:border-primary"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Сообщение"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-primary/30 focus:border-primary min-h-32"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Royal Palace Hotel. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
