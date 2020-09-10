import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgif2Component } from './directiva-ngif2.component';

describe('DirectivaNgif2Component', () => {
  let component: DirectivaNgif2Component;
  let fixture: ComponentFixture<DirectivaNgif2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNgif2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNgif2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
