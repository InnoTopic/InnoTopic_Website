import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelsIconsComponent } from './skill-levels-icons.component';

describe('SkillLevelLabelComponent', () => {
  let component: SkillLevelsIconsComponent;
  let fixture: ComponentFixture<SkillLevelsIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillLevelsIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillLevelsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
