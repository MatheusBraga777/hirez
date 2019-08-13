import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThorPage } from './Thor.page';

describe('ThorPage', () => {
  let component: ThorPage;
  let fixture: ComponentFixture<ThorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
