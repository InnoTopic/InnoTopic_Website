import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Topic } from '../../topics-core/topic';
import { TopicsService } from '../../topics-core/topics.service';

import {
  defaultIconHeight,
  TopicLogoComponent,
} from './topic-logo.component';

describe('TopicLogoComponent', () => {
  let component: TopicLogoComponent;
  let fixture: ComponentFixture<TopicLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicLogoComponent ],
      providers: [ TopicsService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicLogoComponent);
  });

  it('should create', () => {
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should handle custom icon size', () => {
    component = fixture.componentInstance;
    component.topic = 'Nx'
    fixture.detectChanges();
    const t = component.topic as unknown as Topic

    expect(component.width).toBeGreaterThan(defaultIconHeight);
    expect(component.height).toBe(defaultIconHeight);
  });
});
