import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {IzanamiPage } from './Izanami.page';

describe('IzanamiPage', () => {
  let component:IzanamiPage;
  let fixture: ComponentFixture<IzanamiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IzanamiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzanamiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
