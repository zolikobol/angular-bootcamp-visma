import { TestBed } from '@angular/core/testing';

import { CatalogResourceService } from './catalog-resource.service';

describe('CatalogResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatalogResourceService = TestBed.get(CatalogResourceService);
    expect(service).toBeTruthy();
  });
});
