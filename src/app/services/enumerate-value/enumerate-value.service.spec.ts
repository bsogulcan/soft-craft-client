import { TestBed } from '@angular/core/testing';

import { EnumerateValueService } from './enumerate-value.service';

describe('EnumerateValueService', () => {
  let service: EnumerateValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnumerateValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
