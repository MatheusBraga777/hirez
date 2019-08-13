import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LokiPage } from './Loki.page';

describe('LokiPage', () => {
  let component: LokiPage;
  let fixture: ComponentFixture<LokiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LokiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
