import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaixaPotenciaPage } from './baixa-potencia.page';

describe('BaixaPotenciaPage', () => {
  let component: BaixaPotenciaPage;
  let fixture: ComponentFixture<BaixaPotenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaixaPotenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaixaPotenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
