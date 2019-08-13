import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HadesPage } from './Hades.page';

describe('HadesPage', () => {
  let component: HadesPage;
  let fixture: ComponentFixture<HadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
