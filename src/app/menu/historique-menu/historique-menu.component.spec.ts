import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueMenuComponent } from './historique-menu.component';

describe('HistoriqueMenuComponent', () => {
  let component: HistoriqueMenuComponent;
  let fixture: ComponentFixture<HistoriqueMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueMenuComponent]
    });
    fixture = TestBed.createComponent(HistoriqueMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
