import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = [
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 100 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'Angular', percentage: 90 },
    { name: 'TypeScript', percentage: 90 }
  ];
}
