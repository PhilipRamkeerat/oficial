import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    PersonalInformationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutMeComponent,
    PersonalInformationComponent
  ]
})
export class ProfileModule { }
