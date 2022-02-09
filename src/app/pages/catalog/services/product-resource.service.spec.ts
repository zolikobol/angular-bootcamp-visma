import { TestBed } from '@angular/core/testing';

import { ProductResourceService } from './product-resource.service';

describe('ProductResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductResourceService = TestBed.get(ProductResourceService);
    expect(service).toBeTruthy();
  });
});
