import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolosPage } from './protocolos.page';

describe('ProtocolosPage', () => {
  let component: ProtocolosPage;
  let fixture: ComponentFixture<ProtocolosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
