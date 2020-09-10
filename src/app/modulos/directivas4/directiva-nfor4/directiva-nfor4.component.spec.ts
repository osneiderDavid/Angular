import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNfor4Component } from './directiva-nfor4.component';

describe('DirectivaNfor4Component', () => {
  let component: DirectivaNfor4Component;
  let fixture: ComponentFixture<DirectivaNfor4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNfor4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNfor4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
