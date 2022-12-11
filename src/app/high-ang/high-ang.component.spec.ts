import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighAngComponent } from './high-ang.component';

describe('HighAngComponent', () => {
  let component: HighAngComponent;
  let fixture: ComponentFixture<HighAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
