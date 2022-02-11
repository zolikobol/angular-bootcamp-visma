import { TestBed } from '@angular/core/testing';

import { DogsResourceService } from './dogs-resource.service';

describe('DogsResourceService', () => {
  let service: DogsResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
