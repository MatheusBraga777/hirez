import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiãoPage } from './Guardião.page';

describe('GuardiãoPage', () => {
  let component: GuardiãoPage;
  let fixture: ComponentFixture<GuardiãoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardiãoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardiãoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
