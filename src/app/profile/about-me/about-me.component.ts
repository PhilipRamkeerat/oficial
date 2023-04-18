import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public name: string = 'Philip Ramkeerat';
  public description: string = `Hello, I'm Philip Ramkeerat, a Senior Frontend developer specialized in the Angular framework. With several years of experience in web projects, I have all the necessary skills to act as a Frontend.`;
  constructor() { }

  ngOnInit(): void {
  }

  public showMoreInfo(): void {
    // Lógica para exibir mais informações do desenvolvedor
    console.log('In Construction');
  }
}
