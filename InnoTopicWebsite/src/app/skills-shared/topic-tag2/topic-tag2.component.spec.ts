import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicTag2Component } from './topic-tag2.component';

describe('TopicTag2Component', () => {
  let component: TopicTag2Component;
  let fixture: ComponentFixture<TopicTag2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicTag2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicTag2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
