import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvPage } from './cv.page';

describe('CvPage', () => {
  let component: CvPage;
  let fixture: ComponentFixture<CvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
