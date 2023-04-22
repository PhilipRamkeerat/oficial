import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  templateUrl: './scroll-progress.component.html',
  styleUrls: ['./scroll-progress.component.scss'],
})
export class ScrollProgressComponent {
  // Variable to store the height of the progress bar
  progressHeight = '0%';

  // Variable to control the visibility of the progress component
  isScrollbarVisible = false;

  constructor() {}

  // Method called when the component is initialized
  ngOnInit(): void {
    this.updateScrollbarVisibility(); // Check the visibility of the scrollbar
    this.updateProgressBar(); // Update the progress bar initially
  }

  // Listens to the window scroll event and calls onWindowScroll()
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateProgressBar(); // Update the progress bar when the window is scrolled
  }

  // Listens to the window resize event and calls onWindowResize()
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.updateScrollbarVisibility(); // Update the scrollbar visibility when the window is resized
  }

  // Method to update the progress bar
  updateProgressBar() {
    const windowHeight = window.innerHeight; // Height of the browser window
    const documentHeight = document.documentElement.scrollHeight; // Total height of the document
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Current vertical scroll position

    // Calculates the scroll progress as a percentage of the total available scroll
    const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
    this.progressHeight = progress + '%'; // Update the height of the progress bar
  }

  // Method to check and update the visibility of the scrollbar
  updateScrollbarVisibility() {
    const windowHeight = window.innerHeight; // Height of the browser window
    const documentHeight = document.documentElement.scrollHeight; // Total height of the document

    // Check if the height of the window is less than the height of the document
    this.isScrollbarVisible = windowHeight < documentHeight;
  }
}
