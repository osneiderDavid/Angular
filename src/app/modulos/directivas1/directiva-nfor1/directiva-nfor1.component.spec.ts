import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNfor1Component } from './directiva-nfor1.component';

describe('DirectivaNfor1Component', () => {
  let component: DirectivaNfor1Component;
  let fixture: ComponentFixture<DirectivaNfor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNfor1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNfor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
