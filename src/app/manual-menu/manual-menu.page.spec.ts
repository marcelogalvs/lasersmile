import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualMenuPage } from './manual-menu.page';

describe('ManualMenuPage', () => {
  let component: ManualMenuPage;
  let fixture: ComponentFixture<ManualMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
