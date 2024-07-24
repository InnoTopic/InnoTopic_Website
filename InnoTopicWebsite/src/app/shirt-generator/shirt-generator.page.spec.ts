import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShirtGeneratorPage } from './shirt-generator.page';

describe('ShirtGeneratorPage', () => {
  let component: ShirtGeneratorPage;
  let fixture: ComponentFixture<ShirtGeneratorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShirtGeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
