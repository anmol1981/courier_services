import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAdminPwdComponent } from './change-admin-pwd.component';

describe('ChangeAdminPwdComponent', () => {
  let component: ChangeAdminPwdComponent;
  let fixture: ComponentFixture<ChangeAdminPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeAdminPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAdminPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
