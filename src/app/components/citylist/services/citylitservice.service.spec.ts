import { TestBed } from '@angular/core/testing';

import { CitylitserviceService } from './citylitservice.service';

describe('CitylitserviceService', () => {
  let service: CitylitserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitylitserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
