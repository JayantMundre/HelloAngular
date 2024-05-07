import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDerectiveComponent } from './switch-derective.component';

describe('SwitchDerectiveComponent', () => {
  let component: SwitchDerectiveComponent;
  let fixture: ComponentFixture<SwitchDerectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchDerectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchDerectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
