import { TestBed } from '@angular/core/testing';

import { ClintSideService } from './clint-side.service';

describe('FrontPageService', () => {
  let service: ClintSideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClintSideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
