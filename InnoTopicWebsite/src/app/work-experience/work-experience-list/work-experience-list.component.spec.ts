import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceListComponent } from './work-experience-list.component';

describe('WorkExperienceListComponent', () => {
  let component: WorkExperienceListComponent;
  let fixture: ComponentFixture<WorkExperienceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
