import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitsPage } from './kits.page';

describe('KitsPage', () => {
  let component: KitsPage;
  let fixture: ComponentFixture<KitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
