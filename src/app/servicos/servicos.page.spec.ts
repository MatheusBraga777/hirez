import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { servicosPage } from './servicos.page';

describe('servicosPage', () => {
  let component: servicosPage;
  let fixture: ComponentFixture<servicosPage>;
  let servicosPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ servicosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(servicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    servicosPage = fixture.nativeElement;
    const items = servicosPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
