import { TestBed } from '@angular/core/testing';

import { FruitlistservicesService } from './fruitlistservices.service';

describe('FruitlistservicesService', () => {
  let service: FruitlistservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitlistservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
