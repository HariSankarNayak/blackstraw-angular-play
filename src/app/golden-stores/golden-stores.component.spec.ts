import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenStoresComponent } from './golden-stores.component';

describe('GoldenStoresComponent', () => {
  let component: GoldenStoresComponent;
  let fixture: ComponentFixture<GoldenStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldenStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
