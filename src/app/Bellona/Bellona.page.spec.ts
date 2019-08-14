import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {BellonaPage } from './Bellona.page';

describe('BellonaPage', () => {
  let component:BellonaPage;
  let fixture: ComponentFixture<BellonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BellonaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BellonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
