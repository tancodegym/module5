import { TestBed } from '@angular/core/testing';

import { HouseCarService } from './house-car.service';

describe('HouseCarService', () => {
  let service: HouseCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
