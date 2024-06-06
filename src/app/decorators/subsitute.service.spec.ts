import { TestBed } from '@angular/core/testing';

import { SubsituteService } from './subsitute.service';

describe('SubsituteService', () => {
  let service: SubsituteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubsituteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
