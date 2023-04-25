import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeDemoPage } from './theme-demo.page';

describe('ThemeDemoPage', () => {
  let component: ThemeDemoPage;
  let fixture: ComponentFixture<ThemeDemoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ThemeDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
