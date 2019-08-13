import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthenaPage } from './Athena.page';

describe('AthenaPage', () => {
  let component: AthenaPage;
  let fixture: ComponentFixture<AthenaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthenaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
