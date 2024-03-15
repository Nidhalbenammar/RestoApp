import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlatComponent } from './update-plat.component';

describe('UpdatePlatComponent', () => {
  let component: UpdatePlatComponent;
  let fixture: ComponentFixture<UpdatePlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePlatComponent]
    });
    fixture = TestBed.createComponent(UpdatePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
