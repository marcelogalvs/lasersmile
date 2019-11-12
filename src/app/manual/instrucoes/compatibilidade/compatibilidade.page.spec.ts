import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatibilidadePage } from './compatibilidade.page';

describe('CompatibilidadePage', () => {
  let component: CompatibilidadePage;
  let fixture: ComponentFixture<CompatibilidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompatibilidadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompatibilidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
