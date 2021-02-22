import { TestBed } from '@angular/core/testing';

import { AccettazioneemergenzeService } from './accettazioneemergenze.service';

describe('AccettazioneemergenzeService', () => {
  let service: AccettazioneemergenzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccettazioneemergenzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
