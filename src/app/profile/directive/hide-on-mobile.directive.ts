import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideOnMobile]'
})
export class HideOnMobileDirective {
  isMobile = false;

  constructor(private el: ElementRef, private renderer: Renderer2, private window: Window) { }

  ngOnInit() {
    this.isMobile = this.window.innerWidth < 800;
    if (this.isMobile) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      console.log('Element hidden on mobile');
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = this.window.innerWidth < 800;
    if (this.isMobile) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      console.log('Element hidden on mobile');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      console.log('Element shown on desktop');
    }
  }
}
