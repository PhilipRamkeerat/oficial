import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  public name: string = 'Philip Ramkeerat';
  descriptions = {
    primary: `Greetings, I'm a seasoned Senior Frontend Developer with a specialization in the Angular framework. My extensive experience in various web projects has equipped me with all the essential skills to perform exceptionally as a Frontend Developer.`,
    secondary: ` Let's create something amazing together!`
  }

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
