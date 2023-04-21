import { Component } from '@angular/core';
interface Skill {
  icon: string;
  name: string;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: Skill[] = [
    {
      icon: 'assets/images/Icons.png',
      name: 'HTML'
    },
    {
      icon: 'assets/images/Icons.png',
      name: 'CSS'
    },
    {
      icon: 'assets/images/Icons.png',
      name: 'JavaScript'
    },
    {
      icon: 'assets/images/Icons.png',
      name: 'TypeScript'
    },
    {
      icon: 'assets/images/Icons.png',
      name: 'Angular'
    }
  ];
}
