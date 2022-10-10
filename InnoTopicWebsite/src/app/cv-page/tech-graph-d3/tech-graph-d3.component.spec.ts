import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechGraphD3Component } from './tech-graph-d3.component';

describe('TechGraphD3Component', () => {
  let component: TechGraphD3Component;
  let fixture: ComponentFixture<TechGraphD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechGraphD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechGraphD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
