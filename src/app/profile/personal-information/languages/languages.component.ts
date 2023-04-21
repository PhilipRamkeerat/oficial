import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {

  languages = [
    { name: 'English', proficiency: 'Intermediate' },
    { name: 'Portuguese', proficiency: 'Native' }
  ];
}
