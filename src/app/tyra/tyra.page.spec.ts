import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { tyraPage } from './tyra.page';

describe('tyraPage', () => {
  let component: tyraPage;
  let fixture: ComponentFixture<tyraPage>;
  let CampeõesPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tyraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    CampeõesPage = fixture.nativeElement;
    const items = CampeõesPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
