import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechGraphD3Index1Component } from './tech-graph-d3-index1.component';

describe('TechGraphD3Index1Component', () => {
  let component: TechGraphD3Index1Component;
  let fixture: ComponentFixture<TechGraphD3Index1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechGraphD3Index1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechGraphD3Index1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
