import { TestBed } from '@angular/core/testing';

import { CaricareAutoService } from './caricare-auto.service';

describe('CaricareAutoService', () => {
  let service: CaricareAutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaricareAutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
