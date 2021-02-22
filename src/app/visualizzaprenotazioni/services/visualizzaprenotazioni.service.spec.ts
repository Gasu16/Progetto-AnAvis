import { TestBed } from '@angular/core/testing';

import { VisualizzaprenotazioniService } from './visualizzaprenotazioni.service';

describe('VisualizzaprenotazioniService', () => {
  let service: VisualizzaprenotazioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualizzaprenotazioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
