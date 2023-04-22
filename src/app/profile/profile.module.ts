import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ModalHireComponent } from './about-me/modal-hire/modal-hire.component';
import { HideOnMobileDirective } from './directive/hide-on-mobile.directive';
import { ExtraSkillsComponent } from './personal-information/extra-skills/extra-skills.component';
import { HorizontalLineComponent } from './personal-information/horizontal-line/horizontal-line.component';
import { InfoComponent } from './personal-information/info/info.component';
import { LanguagesComponent } from './personal-information/languages/languages.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProgressBarComponent } from './personal-information/progress-bar/progress-bar.component';
import { SkillsComponent } from './personal-information/skills/skills.component';
import { SocialIconsComponent } from './personal-information/social-icons/social-icons.component';
import { MyServicesComponent } from '../my-services/my-services.component';
import { CardsComponent } from '../my-services/cards/cards.component';

// Fornecer o serviço Window manualmente
export const WINDOW_PROVIDERS = [
  { provide: Window, useValue: window }
];


@NgModule({
  declarations: [
    AboutMeComponent,
    PersonalInformationComponent,
    SocialIconsComponent,
    InfoComponent,
    HorizontalLineComponent,
    LanguagesComponent,
    ModalHireComponent,
    HideOnMobileDirective,
    ProgressBarComponent,
    SkillsComponent,
    ExtraSkillsComponent,
    MyServicesComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutMeComponent,
    PersonalInformationComponent,
    ModalHireComponent,
    HideOnMobileDirective
  ],
  providers: [
    WINDOW_PROVIDERS
  ]
})
export class ProfileModule { }
