import { TestBed } from '@angular/core/testing';

import { ToggleSideBarService } from './toggle-side-bar.service';

describe('ToggleSideBarService', () => {
  let service: ToggleSideBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleSideBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
