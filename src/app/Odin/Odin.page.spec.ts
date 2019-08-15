import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {OdinPage } from './Odin.page';

describe('OdinPage', () => {
  let component:OdinPage;
  let fixture: ComponentFixture<OdinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OdinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
