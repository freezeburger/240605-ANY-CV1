import { TestBed } from '@angular/core/testing';

import { LibAnyService } from './lib-any.service';

describe('LibAnyService', () => {
  let service: LibAnyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibAnyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
