import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesinfeccaoPage } from './desinfeccao.page';

describe('DesinfeccaoPage', () => {
  let component: DesinfeccaoPage;
  let fixture: ComponentFixture<DesinfeccaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesinfeccaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesinfeccaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
