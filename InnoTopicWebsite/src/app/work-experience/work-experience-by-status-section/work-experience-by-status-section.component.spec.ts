import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceByStatusSectionComponent } from './work-experience-by-status-section.component';

describe('WorkExperienceByStatusSectionComponent', () => {
  let component: WorkExperienceByStatusSectionComponent;
  let fixture: ComponentFixture<WorkExperienceByStatusSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceByStatusSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceByStatusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
