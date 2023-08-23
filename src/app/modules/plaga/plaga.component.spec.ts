import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagaComponent } from './plaga.component';

describe('PlagaComponent', () => {
  let component: PlagaComponent;
  let fixture: ComponentFixture<PlagaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlagaComponent]
    });
    fixture = TestBed.createComponent(PlagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
