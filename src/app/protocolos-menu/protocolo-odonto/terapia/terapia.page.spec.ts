import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaPage } from './terapia.page';

describe('TerapiaPage', () => {
  let component: TerapiaPage;
  let fixture: ComponentFixture<TerapiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerapiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerapiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
