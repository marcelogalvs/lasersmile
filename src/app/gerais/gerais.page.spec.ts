import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeraisPage } from './gerais.page';

describe('GeraisPage', () => {
  let component: GeraisPage;
  let fixture: ComponentFixture<GeraisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeraisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
