import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaSwitch4Component } from './directiva-switch4.component';

describe('DirectivaSwitch4Component', () => {
  let component: DirectivaSwitch4Component;
  let fixture: ComponentFixture<DirectivaSwitch4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaSwitch4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaSwitch4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
