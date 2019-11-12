import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiocompatibilidadePage } from './biocompatibilidade.page';

describe('BiocompatibilidadePage', () => {
  let component: BiocompatibilidadePage;
  let fixture: ComponentFixture<BiocompatibilidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiocompatibilidadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiocompatibilidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
