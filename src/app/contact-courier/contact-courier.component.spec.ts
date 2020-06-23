import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCourierComponent } from './contact-courier.component';

describe('ContactCourierComponent', () => {
  let component: ContactCourierComponent;
  let fixture: ComponentFixture<ContactCourierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCourierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
