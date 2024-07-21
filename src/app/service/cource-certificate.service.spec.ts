import { TestBed } from '@angular/core/testing';

import { CourceCertificateService } from './cource-certificate.service';

describe('CourceCertificateService', () => {
  let service: CourceCertificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourceCertificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
