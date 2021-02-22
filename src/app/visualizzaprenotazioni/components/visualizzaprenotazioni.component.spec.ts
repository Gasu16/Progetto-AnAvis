import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaprenotazioniComponent } from './visualizzaprenotazioni.component';

describe('VisualizzaprenotazioniComponent', () => {
  let component: VisualizzaprenotazioniComponent;
  let fixture: ComponentFixture<VisualizzaprenotazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaprenotazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaprenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
