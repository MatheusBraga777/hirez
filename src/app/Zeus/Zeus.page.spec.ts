import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeusPage } from './Zeus.page';

describe('ZeusPage', () => {
  let component: ZeusPage;
  let fixture: ComponentFixture<ZeusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
