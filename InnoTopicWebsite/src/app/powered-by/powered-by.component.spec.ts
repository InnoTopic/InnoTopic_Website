import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoweredByComponent } from './powered-by.component';

describe('PoweredByComponent', () => {
  let component: PoweredByComponent;
  let fixture: ComponentFixture<PoweredByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoweredByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoweredByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
