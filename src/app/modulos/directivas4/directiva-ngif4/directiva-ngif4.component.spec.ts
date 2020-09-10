import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgif4Component } from './directiva-ngif4.component';

describe('DirectivaNgif4Component', () => {
  let component: DirectivaNgif4Component;
  let fixture: ComponentFixture<DirectivaNgif4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNgif4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNgif4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
