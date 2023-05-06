import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvPagePrintPage } from './cv-page-print.page';

describe('CvPagePrintPage', () => {
  let component: CvPagePrintPage;
  let fixture: ComponentFixture<CvPagePrintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CvPagePrintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
