import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOverlapComponent } from './store-overlap.component';

describe('StoreOverlapComponent', () => {
  let component: StoreOverlapComponent;
  let fixture: ComponentFixture<StoreOverlapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreOverlapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOverlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
