import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public name: string = 'Philip Ramkeerat';
  public description: string = `Hello, I'm Philip Ramkeerat, a Senior Frontend developer specialized in the Angular framework. With several years of experience in web projects, I have all the necessary skills to act as a Frontend.`;
  linkedInUrl = 'https://www.linkedin.com/in/philip-ramkeerat/';
  isModalOpen = false;

  @Output() onCancelClick = new EventEmitter<void>();
  @Output() onOkClick = new EventEmitter<void>();
  isFirstTime = true;

  constructor() {
    document.addEventListener('keydown', (event) => this.onEsc(event));
    document.addEventListener('click', (event) => this.onClick(event));
  }

  onEsc(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  onClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const isClickedOutsideModal = this.isModalOpen && targetElement.closest('.modal__content') === null;

    if (isClickedOutsideModal && this.isFirstTime) {
      this.isFirstTime = false;
    } else if (isClickedOutsideModal) {
      this.closeModal();
    }
  }

  onCancel() {
    this.closeModal();
    console.log('Modal closed without doing anything.');
  }

  onOk() {
    // Faça alguma ação aqui
    this.closeModal();
    console.log('Modal closed after doing something.');
  }

  private closeModal() {
    this.isModalOpen = false;
    this.onCancelClick.emit();
    this.resetIsFirstTime();
  }

  private resetIsFirstTime() {
    this.isFirstTime = true;
  }

}
