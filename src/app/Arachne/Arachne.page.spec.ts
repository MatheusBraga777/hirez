import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArachnePage } from './Arachne.page';

describe('ArachnePage', () => {
  let component: ArachnePage;
  let fixture: ComponentFixture<ArachnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArachnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArachnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
