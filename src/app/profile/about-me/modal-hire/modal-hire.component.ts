import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-modal-hire',
  templateUrl: './modal-hire.component.html',
  styleUrls: ['./modal-hire.component.scss']
})
export class ModalHireComponent {
  @Output() onCancelClick = new EventEmitter<void>();
  @Output() onOkClick = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEsc() {
    console.log('onEsc');

    this.closeModal();
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    console.log('onClick');

    // if (targetElement.closest('.modal__content') === null) {
    //   this.closeModal();
    // }
  }

  onCancel() {
    this.closeModal();
  }

  onOk() {
    // Faça alguma ação aqui
    this.closeModal();
  }

  private closeModal() {
    this.onCancelClick.emit();
  }
}
