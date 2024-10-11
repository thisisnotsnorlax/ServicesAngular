import { TestBed } from '@angular/core/testing';

import { CourseservicesService } from './courseservices.service';

describe('CourseservicesService', () => {
  let service: CourseservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
