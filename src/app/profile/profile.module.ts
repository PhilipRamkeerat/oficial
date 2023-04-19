import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SocialIconsComponent } from './personal-information/social-icons/social-icons.component';
import { InfoComponent } from './personal-information/info/info.component';
import { HorizontalLineComponent } from './personal-information/horizontal-line/horizontal-line.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    PersonalInformationComponent,
    SocialIconsComponent,
    InfoComponent,
    HorizontalLineComponent
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
