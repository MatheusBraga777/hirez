import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagoPage } from './Mago.page';

describe('MagoPage', () => {
  let component: MagoPage;
  let fixture: ComponentFixture<MagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
