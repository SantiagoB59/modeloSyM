import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCameraComponent } from './button-camera.component';

describe('ButtonCameraComponent', () => {
  let component: ButtonCameraComponent;
  let fixture: ComponentFixture<ButtonCameraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCameraComponent]
    });
    fixture = TestBed.createComponent(ButtonCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
