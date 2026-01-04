import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RevealOnScrollDirective } from './directives/reveal-on-scroll';
import { FormsModule } from '@angular/forms';

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

  sendEmail() {
    const subject = encodeURIComponent('Solicitação de orçamento - Synke');

    const body = encodeURIComponent(
      `📩 NOVA MENSAGEM RECEBIDA\n\n` +
        `DADOS DO CONTATO\n` +
        `Nome: ${this.emailForm.name}\n` +
        `Email: ${this.emailForm.email}\n\n` +
        `MENSAGEM\n` +
        `${this.emailForm.message}\n\n` +
        `—\n` +
        `Este contato foi enviado através do formulário do site.`
    );

    window.location.href = `mailto:synke.services@gmail.com?subject=${subject}&body=${body}`;
  }

  sendWhatsapp(): void {
    const message = encodeURIComponent(
      'Olá! \n\n' +
        'Gostaria de conversar sobre um projeto e entender as possibilidades de uma estruturação profissional.\n\n' +
        'Aguardo seu retorno.'
    );

    window.open(`https://wa.me/5546999381599?text=${message}`, '_blank');
  }
}
