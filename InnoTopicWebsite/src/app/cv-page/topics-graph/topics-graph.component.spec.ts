import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsGraphComponent } from './topics-graph.component';

describe('TopicsGraphComponent', () => {
  let component: TopicsGraphComponent;
  let fixture: ComponentFixture<TopicsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
