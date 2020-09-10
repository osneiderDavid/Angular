import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNfor3Component } from './directiva-nfor3.component';

describe('DirectivaNfor3Component', () => {
  let component: DirectivaNfor3Component;
  let fixture: ComponentFixture<DirectivaNfor3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNfor3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNfor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
