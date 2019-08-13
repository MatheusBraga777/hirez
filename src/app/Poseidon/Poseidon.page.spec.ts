import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseidonPage } from './Poseidon.page';

describe('PoseidonPage', () => {
  let component: PoseidonPage;
  let fixture: ComponentFixture<PoseidonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoseidonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoseidonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
