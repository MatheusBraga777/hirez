import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ReiArthurPage } from './ReiArthur.page';

describe('ReiArthurPage', () => {
  let component:ReiArthurPage;
  let fixture: ComponentFixture<ReiArthurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReiArthurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReiArthurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
