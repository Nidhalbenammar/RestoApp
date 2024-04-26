import { TestBed } from '@angular/core/testing';

import { PropositionsService } from './propositions.service';

describe('PropositionsService', () => {
  let service: PropositionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropositionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
