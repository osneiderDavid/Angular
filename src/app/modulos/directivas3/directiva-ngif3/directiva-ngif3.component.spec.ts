import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgif3Component } from './directiva-ngif3.component';

describe('DirectivaNgif3Component', () => {
  let component: DirectivaNgif3Component;
  let fixture: ComponentFixture<DirectivaNgif3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNgif3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNgif3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
