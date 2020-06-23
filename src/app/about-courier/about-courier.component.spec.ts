import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCourierComponent } from './about-courier.component';

describe('AboutCourierComponent', () => {
  let component: AboutCourierComponent;
  let fixture: ComponentFixture<AboutCourierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCourierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
