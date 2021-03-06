import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CatalogListViewComponent } from './catalog-list-view.component';

describe('CatalogListViewComponent', () => {
  let component: CatalogListViewComponent;
  let fixture: ComponentFixture<CatalogListViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
