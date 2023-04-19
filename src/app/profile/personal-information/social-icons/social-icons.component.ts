import { Component } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent {
  socialMedia = [
    {
      link: 'https://instagram.com/philip.devfront/',
      iconUrl: 'assets/images/social-icons/insta.png',
      altText: 'Instagram'
    },
    // {
    //   link: 'https://twitter.com/',
    //   iconUrl: 'assets/images/social-icons/twitter.png',
    //   altText: 'Twitter'
    // },
    // {
    //   link: 'https://www.facebook.com/',
    //   iconUrl: 'assets/images/social-icons/facebook.png',
    //   altText: 'Facebook'
    // },
    {
      link: 'https://www.linkedin.com/in/philip-ramkeerat/',
      iconUrl: 'assets/images/social-icons/linkedin.png',
      altText: 'LinkedIn'
    },
    // {
    //   link: 'https://www.youtube.com/',
    //   iconUrl: 'assets/images/social-icons/youtube.png',
    //   altText: 'YouTube'
    // },
    {
      link: 'https://github.com/PhilipRamkeerat',
      iconUrl: 'assets/images/social-icons/github.svg',
      altText: 'GitHub'
    }
  ];


}
