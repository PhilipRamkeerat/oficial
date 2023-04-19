import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  age = 30;
  residence = 'Manaus/Amazonas';
  freelance = 'Available';
  address = 'Brazil';
}
