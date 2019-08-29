import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalProfilesComponent } from './external-profiles.component';

describe('ExternalProfilesComponent', () => {
  let component: ExternalProfilesComponent;
  let fixture: ComponentFixture<ExternalProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
