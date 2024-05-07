import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfDerivativeComponent } from './if-derivative.component';

describe('IfDerivativeComponent', () => {
  let component: IfDerivativeComponent;
  let fixture: ComponentFixture<IfDerivativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfDerivativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfDerivativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
