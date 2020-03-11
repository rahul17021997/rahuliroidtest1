import { TestBed } from '@angular/core/testing';

import { GobserviceService } from './gobservice.service';

describe('GobserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GobserviceService = TestBed.get(GobserviceService);
    expect(service).toBeTruthy();
  });
});
