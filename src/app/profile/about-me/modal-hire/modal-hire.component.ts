import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-hire',
  templateUrl: './modal-hire.component.html',
  styleUrls: ['./modal-hire.component.scss']
})
export class ModalHireComponent {

  @Output() onCancelClick = new EventEmitter<void>();
  @Output() onOkClick = new EventEmitter<void>();

  onCancel() {
    this.onCancelClick.emit();
  }

  onOk() {
    this.onOkClick.emit();
  }
}
