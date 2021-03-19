import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicEliteComponent } from './epic-elite.component';

describe('EpicEliteComponent', () => {
  let component: EpicEliteComponent;
  let fixture: ComponentFixture<EpicEliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicEliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicEliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
