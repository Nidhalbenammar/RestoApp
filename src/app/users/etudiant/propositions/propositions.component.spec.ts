import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsComponent } from './propositions.component';

describe('PropositionsComponent', () => {
  let component: PropositionsComponent;
  let fixture: ComponentFixture<PropositionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropositionsComponent]
    });
    fixture = TestBed.createComponent(PropositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
