import { TestBed } from '@angular/core/testing';

import { DataPopulateService } from './data-populate.service';

describe('DataPopulateService', () => {
  let service: DataPopulateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPopulateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
