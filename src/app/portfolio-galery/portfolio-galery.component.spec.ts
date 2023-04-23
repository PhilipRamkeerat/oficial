import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGaleryComponent } from './portfolio-galery.component';

describe('PortfolioGaleryComponent', () => {
  let component: PortfolioGaleryComponent;
  let fixture: ComponentFixture<PortfolioGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioGaleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
