import { TestBed } from '@angular/core/testing';

import { CartResourceService } from './cart-resource.service';

describe('CartResourceService', () => {
  let service: CartResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
