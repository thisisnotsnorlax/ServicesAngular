import { TestBed } from '@angular/core/testing';

import { StudentlistservicesService } from './studentlistservices.service';

describe('StudentlistservicesService', () => {
  let service: StudentlistservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentlistservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
