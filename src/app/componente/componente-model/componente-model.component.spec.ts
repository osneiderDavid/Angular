import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteModelComponent } from './componente-model.component';

describe('ComponenteModelComponent', () => {
  let component: ComponenteModelComponent;
  let fixture: ComponentFixture<ComponenteModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
