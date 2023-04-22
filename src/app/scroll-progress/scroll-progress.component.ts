import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  templateUrl: './scroll-progress.component.html',
  styleUrls: ['./scroll-progress.component.scss']
})
export class ScrollProgressComponent   {
  progressHeight = '0%';

  constructor() {}

  ngOnInit(): void {
    this.updateProgressBar();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateProgressBar();
  }

  updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
    this.progressHeight = progress + '%';
  }
}
