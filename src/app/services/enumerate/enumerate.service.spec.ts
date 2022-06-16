import { TestBed } from '@angular/core/testing';

import { EnumerateService } from './enumerate.service';

describe('EnumerateService', () => {
  let service: EnumerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnumerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
