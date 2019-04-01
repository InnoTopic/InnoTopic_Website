import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInterestsComponent } from './personal-interests.component';

describe('PersonalInterestsComponent', () => {
  let component: PersonalInterestsComponent;
  let fixture: ComponentFixture<PersonalInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
