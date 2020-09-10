import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNfor2Component } from './directiva-nfor2.component';

describe('DirectivaNfor2Component', () => {
  let component: DirectivaNfor2Component;
  let fixture: ComponentFixture<DirectivaNfor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNfor2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNfor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
