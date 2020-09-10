import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNmodel2Component } from './directiva-nmodel2.component';

describe('DirectivaNmodel2Component', () => {
  let component: DirectivaNmodel2Component;
  let fixture: ComponentFixture<DirectivaNmodel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNmodel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNmodel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
