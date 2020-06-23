import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierHomeComponent } from './courier-home.component';

describe('CourierHomeComponent', () => {
  let component: CourierHomeComponent;
  let fixture: ComponentFixture<CourierHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
