import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ArtemisPage } from './Artemis.page';

describe('ArtemisPage', () => {
  let component:ArtemisPage;
  let fixture: ComponentFixture<ArtemisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtemisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtemisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
