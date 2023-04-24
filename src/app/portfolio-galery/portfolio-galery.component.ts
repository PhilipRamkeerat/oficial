import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-galery',
  templateUrl: './portfolio-galery.component.html',
  styleUrls: ['./portfolio-galery.component.scss'],
})
export class PortfolioGaleryComponent {
  // Define the properties of the portfolio
  title = 'Portfolio';
  description =
    'Discover my web development projects, focused on user experience and built with best practices. Explore more!';

  // Set the default active category to be "All"
  activeCategory: string = 'All';

  // Define an array of images with their source URL, alternative text, and URL for redirection
  images: { src: string; alt: string; url: string }[] = [
    {
      src: 'https://picsum.photos/300/300',
      alt: 'Image 1',
      url: 'https://www.google.com',
    },
    {
      src: 'https://picsum.photos/300/300',
      alt: 'Image 2',
      url: 'https://www.google.com',
    },
    {
      src: 'https://picsum.photos/300/300',
      alt: 'Image 3',
      url: 'https://www.google.com',
    }
  ];

  // Define an array of images for the "Web Development" category
  webDevImages: { src: string; alt: string; url: string }[] = [
    {
      src: 'https://picsum.photos/300/300?grayscale',
      alt: 'Image 1',
      url: 'https://www.google.com',
    },
    {
      src: 'https://picsum.photos/300/300?grayscale',
      alt: 'Image 2',
      url: 'https://www.google.com',
    },
    {
      src: 'https://picsum.photos/300/300?grayscale',
      alt: 'Image 3',
      url: 'https://www.google.com',
    }
  ];

  // Define an array of images for the "UI/UX Design" category
  uiUxImages: { src: string; alt: string; url: string }[] = [
    {
      src: 'https://picsum.photos/300/300?sepia',
      alt: 'Image 4',
      url: 'https://www.google.com',
    },
    {
      src: 'https://picsum.photos/300/300?sepia',
      alt: 'Image 5',
      url: 'https://www.google.com',
    },
    {
      src: 'https://picsum.photos/300/300?sepia',
      alt: 'Image 6',
      url: 'https://www.google.com',
    }
  ];

  // Define a function to change the active category
  changeCategory(category: string) {
    this.activeCategory = category;
  }

  // Define a function to get the images for the current active category
  getImagesForCategory() {
    switch (this.activeCategory) {
      case 'Web Development':
        return this.webDevImages;
      case 'UI/UX Design':
        return this.uiUxImages;
      case 'All':
      default:
        return this.images;
    }
  }
}
