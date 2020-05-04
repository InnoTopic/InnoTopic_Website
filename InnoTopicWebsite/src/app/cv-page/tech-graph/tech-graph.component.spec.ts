import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechGraphComponent } from './tech-graph.component';

describe('TechGraphComponent', () => {
  let component: TechGraphComponent;
  let fixture: ComponentFixture<TechGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
