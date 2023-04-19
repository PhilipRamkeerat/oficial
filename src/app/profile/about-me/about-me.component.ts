import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public name: string = 'Philip Ramkeerat';
  public description: string = `Hello, I'm Philip Ramkeerat, a Senior Frontend developer specialized in the Angular framework. With several years of experience in web projects, I have all the necessary skills to act as a Frontend.`;
  linkedInUrl = 'https://www.linkedin.com/in/philip-ramkeerat/';

  constructor() { }

  ngOnInit(): void {
  }

  public hireEvent(): void {
    const confirmation = confirm('Are you sure you want to go to LinkedIn to contact me for hiring my services?');
    if (confirmation) {
      window.open(this.linkedInUrl, '_blank');
    }
  }
}
