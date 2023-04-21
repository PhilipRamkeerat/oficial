import { Component } from '@angular/core';
interface Skill {
  icon: string;
  name: string;
}
@Component({
  selector: 'app-extra-skills',
  templateUrl: './extra-skills.component.html',
  styleUrls: ['./extra-skills.component.scss']
})
export class ExtraSkillsComponent {
  skills: Skill[] = [
    {
      icon: 'assets/images/Icons.png',
      name: 'HTML, CSS, SASS, LESS'
    },
    {
      icon: 'assets/images/Icons.png',
      name: 'TypeScript, JavaScript'
    },
    {
      icon: 'assets/images/Icons.png',
      name: 'Angular 2+'
    },
    {
      icon: 'assets/images/Icons.png',
      name: 'Bootstrap, Material Design'
    },
    {
      icon: 'assets/images/Icons.png',
      name: 'GIT, Agile Methodologies'
    }
  ];
}
