import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolosMenuPage } from './protocolos-menu.page';

describe('ProtocolosMenuPage', () => {
  let component: ProtocolosMenuPage;
  let fixture: ComponentFixture<ProtocolosMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolosMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolosMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
