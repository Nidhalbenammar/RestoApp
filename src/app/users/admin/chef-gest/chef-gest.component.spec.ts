import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefGestComponent } from './chef-gest.component';

describe('ChefGestComponent', () => {
  let component: ChefGestComponent;
  let fixture: ComponentFixture<ChefGestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefGestComponent]
    });
    fixture = TestBed.createComponent(ChefGestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
