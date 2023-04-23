import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-galery',
  templateUrl: './portfolio-galery.component.html',
  styleUrls: ['./portfolio-galery.component.scss']
})
export class PortfolioGaleryComponent {
  title = 'Portfolio';
  description = 'Discover my web development projects, focused on user experience and built with best practices. Explore more!';
  activeCategory: string = 'Web Development';

  images: { src: string, alt: string }[] = [
    { src: 'assets/images/300x300.png', alt: 'Image 1' },
    { src: 'assets/images/300x300.png', alt: 'Image 2' },
    { src: 'assets/images/300x300.png', alt: 'Image 3' },
  ];

  webDevImages: { src: string, alt: string }[] = [
    { src: 'assets/images/300x300.png', alt: 'Image 1' },
    { src: 'assets/images/300x300.png', alt: 'Image 2' },
    { src: 'assets/images/300x300.png', alt: 'Image 3' },
  ];

  uiUxImages: { src: string, alt: string }[] = [
    { src: 'assets/images/ui-ux.jpg', alt: 'Image 4' },
    { src: 'assets/images/ui-ux.jpg', alt: 'Image 5' },
    { src: 'assets/images/ui-ux.jpg', alt: 'Image 6' },
  ];

  changeCategory(category: string) {
    this.activeCategory = category;
  }

  getImagesForCategory() {
    switch (this.activeCategory) {
      case 'Web Development':
        return this.webDevImages;
      case 'UI/UX Design':
        return this.uiUxImages;
      default:
        return this.images;
    }
  }
}

