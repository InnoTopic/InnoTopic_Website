import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProjectsSectionComponent } from './work-projects-section.component';

xdescribe('WorkProjectsSectionComponent', () => {
  let component: WorkProjectsSectionComponent;
  let fixture: ComponentFixture<WorkProjectsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkProjectsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkProjectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
