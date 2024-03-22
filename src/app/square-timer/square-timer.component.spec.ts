import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareTimerComponent } from './square-timer.component';

describe('SquareTimerComponent', () => {
  let component: SquareTimerComponent;
  let fixture: ComponentFixture<SquareTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquareTimerComponent]
    });
    fixture = TestBed.createComponent(SquareTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
