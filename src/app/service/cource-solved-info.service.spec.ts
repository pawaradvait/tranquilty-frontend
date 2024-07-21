import { TestBed } from '@angular/core/testing';

import { CourceSolvedInfoService } from './cource-solved-info.service';

describe('CourceSolvedInfoService', () => {
  let service: CourceSolvedInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourceSolvedInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
