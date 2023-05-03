import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShirtPage } from './shirt.page';

describe('ShirtPage', () => {
  let component: ShirtPage;
  let fixture: ComponentFixture<ShirtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShirtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
