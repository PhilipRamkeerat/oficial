import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public name: string = 'Philip Ramkeerat';
  public description: string = 'Olá, eu sou Philip Ramkeerat, um desenvolvedor Frontend Senior especializado no framework Angular. Com vários anos de experiência em projetos web, tenho todas as habilidades necessárias para atuar como um Frontend Senior Angular, desde o desenvolvimento de componentes complexos até a integração de APIs e a criação de testes unitários e de integração para garantir a qualidade do código.';

  constructor() { }

  ngOnInit(): void {
  }

  public showMoreInfo(): void {
    // Lógica para exibir mais informações do desenvolvedor
  }
}
