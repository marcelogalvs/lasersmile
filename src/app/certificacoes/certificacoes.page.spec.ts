import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacoesPage } from './certificacoes.page';

describe('CertificacoesPage', () => {
  let component: CertificacoesPage;
  let fixture: ComponentFixture<CertificacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificacoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
