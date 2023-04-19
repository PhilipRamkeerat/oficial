import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHireComponent } from './modal-hire.component';

describe('ModalHireComponent', () => {
  let component: ModalHireComponent;
  let fixture: ComponentFixture<ModalHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
