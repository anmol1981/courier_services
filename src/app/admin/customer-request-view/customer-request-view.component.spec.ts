import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRequestViewComponent } from './customer-request-view.component';

describe('CustomerRequestViewComponent', () => {
  let component: CustomerRequestViewComponent;
  let fixture: ComponentFixture<CustomerRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
