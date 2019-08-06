import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { classesPage } from './classes.page';

describe('classesPage', () => {
  let component: classesPage;
  let fixture: ComponentFixture<classesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ classesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(classesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
