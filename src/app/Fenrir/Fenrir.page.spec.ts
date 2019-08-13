import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenrirPage } from './Fenrir.page';

describe('FenrirPage', () => {
  let component: FenrirPage;
  let fixture: ComponentFixture<FenrirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenrirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenrirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
