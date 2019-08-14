import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AchillesPage } from './Achilles.page';

describe('AchillesPage', () => {
  let component:AchillesPage;
  let fixture: ComponentFixture<AchillesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AchillesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchillesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
