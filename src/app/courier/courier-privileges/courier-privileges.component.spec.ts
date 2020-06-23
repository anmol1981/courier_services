import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierPrivilegesComponent } from './courier-privileges.component';

describe('CourierPrivilegesComponent', () => {
  let component: CourierPrivilegesComponent;
  let fixture: ComponentFixture<CourierPrivilegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierPrivilegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierPrivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
