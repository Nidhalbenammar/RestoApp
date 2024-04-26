import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePropsitionsComponent } from './liste-propsitions.component';

describe('ListePropsitionsComponent', () => {
  let component: ListePropsitionsComponent;
  let fixture: ComponentFixture<ListePropsitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePropsitionsComponent]
    });
    fixture = TestBed.createComponent(ListePropsitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
