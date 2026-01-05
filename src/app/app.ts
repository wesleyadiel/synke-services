import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RevealOnScrollDirective } from './directives/reveal-on-scroll';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RevealOnScrollDirective, FormsModule],
})
export class App {
  protected readonly title = signal('synke-services');
  emailForm = {
    name: '',
    email: '',
    message: '',
  };

  categories = [
    {
      id: 'institucional',
      title: 'Institucionais',
      description: 'Sites corporativos e organizações.',
      active: true,
      projects: [
        {
          title: 'BKC - Beltrão Kart Club',
          description:
            'Acelere sua paixão na melhor pista do sudoeste. Mais que um clube, uma família.',
          link: 'https://bkc.synke.com.br/',
          image: 'bg-bkc.jpg',
        },
      ],
    },
    {
      id: 'autonomos',
      title: 'Autônomos e Micro Empresas',
      description: 'Profissionais liberais e pequenos negócios.',
      active: false,
      projects: [],
    },
    {
      id: 'estabelecimentos',
      title: 'Estabelecimentos',
      description: 'Lojas, restaurantes e comércios locais.',
      active: false,
      projects: [],
    },
  ];

  selectCategory(categoryId: string) {
    this.categories.forEach((cat) => (cat.active = cat.id === categoryId));
  }

  get activeCategory() {
    return this.categories.find((cat) => cat.active);
  }

  isSending = false;

  async sendEmail() {
    if (!this.emailForm.name || !this.emailForm.email || !this.emailForm.message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    this.isSending = true;

    try {
      // TODO: Configure suas credenciais do EmailJS aqui
      // Crie uma conta gratuita em https://www.emailjs.com/
      const SERVICE_ID = 'service_synke'; // Ex: service_x9...
      const TEMPLATE_ID = 'template_synke'; // Ex: template_k2...
      const PUBLIC_KEY = 'sM1Hhtvy67gExIKND'; // Ex: user_7d...

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: this.emailForm.name,
          from_email: this.emailForm.email,
          message: this.emailForm.message,
          reply_to: this.emailForm.email,
        },
        PUBLIC_KEY
      );

      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      this.emailForm = { name: '', email: '', message: '' };
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert(
        'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.'
      );
    } finally {
      this.isSending = false;
    }
  }

  sendWhatsapp(): void {
    const message = encodeURIComponent(
      'Olá! \n\n' +
        'Gostaria de conversar sobre um projeto e entender as possibilidades de uma estruturação profissional.\n\n' +
        'Aguardo seu retorno.'
    );

    window.open(`https://wa.me/5546999229131?text=${message}`, '_blank');
  }
}
