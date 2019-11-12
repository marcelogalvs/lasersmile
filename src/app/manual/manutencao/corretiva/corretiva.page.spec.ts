import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretivaPage } from './corretiva.page';

describe('CorretivaPage', () => {
  let component: CorretivaPage;
  let fixture: ComponentFixture<CorretivaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorretivaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretivaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
