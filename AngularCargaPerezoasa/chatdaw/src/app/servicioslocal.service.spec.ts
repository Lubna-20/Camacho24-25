import { TestBed } from '@angular/core/testing';

import { ServicioslocalService } from './servicioslocal.service';

describe('ServicioslocalService', () => {
  let service: ServicioslocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioslocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
