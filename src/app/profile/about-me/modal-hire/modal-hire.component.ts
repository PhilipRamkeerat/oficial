import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-hire',
  templateUrl: './modal-hire.component.html',
  styleUrls: ['./modal-hire.component.scss']
})
export class ModalHireComponent {
  @Output() onCancelClick = new EventEmitter<void>();
  @Output() onOkClick = new EventEmitter<void>();
  @Output() onCloseModal = new EventEmitter<void>();
  @Input() isModalOpen: any;
  isFirstTime = true;

  constructor() { }

  @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const isClickedOutsideModal = this.isModalOpen && targetElement.closest('.modal__content') === null;

    if (isClickedOutsideModal && this.isFirstTime) {

      this.isFirstTime = false;
    } else if (isClickedOutsideModal) {
      console.log('modal fechado');

      this.closeModal();
    }
  }

  onCancel() {
    debugger;
    this.closeModal();
    this.onCancelClick.emit();
  }

  onOk() {
    debugger;
    this.closeModal();
    this.onOkClick.emit();
  }

  private closeModal() {
    this.onCloseModal.emit();
    this.resetIsFirstTime();
  }

  private resetIsFirstTime() {
    this.isFirstTime = true;
  }
}
