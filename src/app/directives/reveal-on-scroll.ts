import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[synkeReveal]',
})
export class RevealOnScrollDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('is-visible');
        } else {
          this.el.nativeElement.classList.remove('is-visible');
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
