import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNmodel1Component } from './directiva-nmodel1.component';

describe('DirectivaNmodel1Component', () => {
  let component: DirectivaNmodel1Component;
  let fixture: ComponentFixture<DirectivaNmodel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaNmodel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaNmodel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
