import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierBookingInfoComponent } from './courier-booking-info.component';

describe('CourierBookingInfoComponent', () => {
  let component: CourierBookingInfoComponent;
  let fixture: ComponentFixture<CourierBookingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierBookingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierBookingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
