import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacadorPage } from './Cacador.page';

describe('CacadorPage', () => {
  let component: CacadorPage;
  let fixture: ComponentFixture<CacadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
