import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaSwitch1Component } from './directiva-switch1.component';

describe('DirectivaSwitch1Component', () => {
  let component: DirectivaSwitch1Component;
  let fixture: ComponentFixture<DirectivaSwitch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaSwitch1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaSwitch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
