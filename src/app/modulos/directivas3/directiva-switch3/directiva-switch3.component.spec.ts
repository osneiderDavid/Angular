import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaSwitch3Component } from './directiva-switch3.component';

describe('DirectivaSwitch3Component', () => {
  let component: DirectivaSwitch3Component;
  let fixture: ComponentFixture<DirectivaSwitch3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaSwitch3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaSwitch3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
