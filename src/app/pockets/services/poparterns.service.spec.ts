import { TestBed } from '@angular/core/testing';

import { PoparternsService } from './poparterns.service';

describe('PoparternsService', () => {
  let service: PoparternsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoparternsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
