import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaSwitch2Component } from './directiva-switch2.component';

describe('DirectivaSwitch2Component', () => {
  let component: DirectivaSwitch2Component;
  let fixture: ComponentFixture<DirectivaSwitch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaSwitch2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaSwitch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
