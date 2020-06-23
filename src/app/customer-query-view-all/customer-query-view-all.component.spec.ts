import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerQueryViewAllComponent } from './customer-query-view-all.component';

describe('CustomerQueryViewAllComponent', () => {
  let component: CustomerQueryViewAllComponent;
  let fixture: ComponentFixture<CustomerQueryViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerQueryViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerQueryViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
