import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudGestComponent } from './etud-gest.component';

describe('EtudGestComponent', () => {
  let component: EtudGestComponent;
  let fixture: ComponentFixture<EtudGestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudGestComponent]
    });
    fixture = TestBed.createComponent(EtudGestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
