import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerberusPage } from './Cerberus.page';

describe('Cerberusage', () => {
  let component: CerberusPage;
  let fixture: ComponentFixture<CerberusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerberusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerberusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
