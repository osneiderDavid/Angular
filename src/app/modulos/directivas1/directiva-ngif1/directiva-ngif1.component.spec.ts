import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgif1Component } from './directiva-ngif1.component';

describe('DirectivaNgif1Component', () => {
  let component: DirectivaNgif1Component;
  let fixture: ComponentFixture<DirectivaNgif1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNgif1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNgif1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
