import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CatalogDetailComponent } from './catalog-detail.component';

describe('CatalogDetailComponent', () => {
  let component: CatalogDetailComponent;
  let fixture: ComponentFixture<CatalogDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
