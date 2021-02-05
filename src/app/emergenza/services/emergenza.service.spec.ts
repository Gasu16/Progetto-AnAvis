import { TestBed } from '@angular/core/testing';

import { EmergenzaService } from './emergenza.service';

describe('EmergenzaService', () => {
  let service: EmergenzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmergenzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
