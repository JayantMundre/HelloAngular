import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDerectiveComponent } from './for-derective.component';

describe('ForDerectiveComponent', () => {
  let component: ForDerectiveComponent;
  let fixture: ComponentFixture<ForDerectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForDerectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDerectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
