import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWebComponent } from './about-web.component';

describe('AboutWebComponent', () => {
  let component: AboutWebComponent;
  let fixture: ComponentFixture<AboutWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
