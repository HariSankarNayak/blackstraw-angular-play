import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixesLayoutComponent } from './matrixes-layout.component';

describe('MatrixesLayoutComponent', () => {
  let component: MatrixesLayoutComponent;
  let fixture: ComponentFixture<MatrixesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
