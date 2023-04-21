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
      name: 'Bootstrap, Material Design'
    },
    {
      icon: 'assets/images/Icons.png',
      name: 'GIT, Agile Methodologies'
    },
    {
      icon: 'assets/images/Icons.png',
      name: 'SASS, LESS'
    }
  ];
}
