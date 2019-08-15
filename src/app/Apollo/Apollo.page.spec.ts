import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ApolloPage } from './Apollo.page';

describe('ApolloPage', () => {
  let component:ApolloPage;
  let fixture: ComponentFixture<ApolloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApolloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
