import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-galery',
  templateUrl: './portfolio-galery.component.html',
  styleUrls: ['./portfolio-galery.component.scss']
})
export class PortfolioGaleryComponent {
  title = 'Portfolio';
  description = 'Discover my web development projects, focused on user experience and built with best practices. Explore more!';

  images = [
    { src: 'assets/images/300x300.png', alt: 'Placeholder Image 1', category: 'All Categories' },
    { src: 'assets/images/300x300.png', alt: 'Placeholder Image 2', category: 'Ui Design' },
    { src: 'assets/images/300x300.png', alt: 'Placeholder Image 3', category: 'Web Templates' },
    { src: 'assets/images/300x300.png', alt: 'Placeholder Image 4', category: 'Ui Design' },
    { src: 'assets/images/300x300.png', alt: 'Placeholder Image 5', category: 'Web Templates' },
    { src: 'assets/images/300x300.png', alt: 'Placeholder Image 6', category: 'All Categories' },
  ];

  categories = ['All Categories', 'Ui Design', 'Web Templates'];
  selectedCategory = 'All Categories';
  filteredImages = this.images;

  constructor() {}

  ngOnInit(): void {}

  filter(category: string): void {
    this.selectedCategory = category;
    if (category === 'All Categories') {
      this.filteredImages = this.images;
    } else {
      this.filteredImages = this.images.filter(image => image.category === category);
    }
  }

  openImage(image: any): void {
    window.open(image.src, '_blank');
  }
}

