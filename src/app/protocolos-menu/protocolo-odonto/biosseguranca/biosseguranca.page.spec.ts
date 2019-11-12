import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiossegurancaPage } from './biosseguranca.page';

describe('BiossegurancaPage', () => {
  let component: BiossegurancaPage;
  let fixture: ComponentFixture<BiossegurancaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiossegurancaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiossegurancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
