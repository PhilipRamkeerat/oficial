import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  age: number = 30;
  residence: string = 'Manaus/Amazonas';
  freelance = 'Available';
  address: string = 'Brazil';
}
