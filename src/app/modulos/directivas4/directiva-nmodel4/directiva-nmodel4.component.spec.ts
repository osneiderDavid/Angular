import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNmodel4Component } from './directiva-nmodel4.component';

describe('DirectivaNmodel4Component', () => {
  let component: DirectivaNmodel4Component;
  let fixture: ComponentFixture<DirectivaNmodel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNmodel4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNmodel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
