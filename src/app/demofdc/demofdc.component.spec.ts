import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemofdcComponent } from './demofdc.component';

describe('DemofdcComponent', () => {
  let component: DemofdcComponent;
  let fixture: ComponentFixture<DemofdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemofdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemofdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
