import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNmodel3Component } from './directiva-nmodel3.component';

describe('DirectivaNmodel3Component', () => {
  let component: DirectivaNmodel3Component;
  let fixture: ComponentFixture<DirectivaNmodel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNmodel3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNmodel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
