import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssassinoPage } from './Assassino.page';

describe('AssassinoPage', () => {
  let component: AssassinoPage;
  let fixture: ComponentFixture<AssassinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssassinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssassinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
