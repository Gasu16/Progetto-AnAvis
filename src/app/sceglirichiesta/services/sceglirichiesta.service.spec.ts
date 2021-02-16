import { TestBed } from '@angular/core/testing';

import { SceglirichiestaService } from './sceglirichiesta.service';

describe('SceglirichiestaService', () => {
  let service: SceglirichiestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SceglirichiestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
