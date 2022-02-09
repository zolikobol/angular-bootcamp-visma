import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideWidgetComponent } from './right-side-widget.component';

describe('RightSideWidgetComponent', () => {
  let component: RightSideWidgetComponent;
  let fixture: ComponentFixture<RightSideWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSideWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
