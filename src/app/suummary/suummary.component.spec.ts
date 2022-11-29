import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuummaryComponent } from './suummary.component';

describe('SuummaryComponent', () => {
  let component: SuummaryComponent;
  let fixture: ComponentFixture<SuummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
