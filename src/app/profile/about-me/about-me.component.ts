import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public name: string = 'Philip Ramkeerat';
  public description: string = `Hello, I'm Philip Ramkeerat, a Senior Frontend developer specialized in the Angular framework. With several years of experience in web projects, I have all the necessary skills to act as a Frontend.`;
  linkedInUrl = 'https://www.linkedin.com/in/philip-ramkeerat/';
  isModalOpen = false;

  openModal() {
    console.log('open modal');

    this.isModalOpen = true;
  }

  onCancel() {
    console.log('Modal closed without doing anything.');
    this.isModalOpen = false;
  }

  onOk() {
    console.log('Modal closed after doing something.');
    this.isModalOpen = false;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
