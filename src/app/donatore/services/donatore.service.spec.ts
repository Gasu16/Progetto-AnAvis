import { TestBed } from '@angular/core/testing';

import { DonatoreService } from './donatore.service';

describe('DonatoreService', () => {
  let service: DonatoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonatoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
