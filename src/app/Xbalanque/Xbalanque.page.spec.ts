import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {XbalanquePage } from './Xbalanque.page';

describe('XbalanquePage', () => {
  let component:XbalanquePage;
  let fixture: ComponentFixture<XbalanquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [XbalanquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XbalanquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
