import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VennHighchartsComponent } from './venn-highcharts.component';

describe('VennHighchartsComponent', () => {
  let component: VennHighchartsComponent;
  let fixture: ComponentFixture<VennHighchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VennHighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VennHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
