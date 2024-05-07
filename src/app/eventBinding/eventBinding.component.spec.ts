import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClssbindingComponent } from './eventBinding.component';

describe('ClssbindingComponent', () => {
  let component: ClssbindingComponent;
  let fixture: ComponentFixture<ClssbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClssbindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClssbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
