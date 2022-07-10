import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixClusterComponent } from './matrix-cluster.component';

describe('MatrixClusterComponent', () => {
  let component: MatrixClusterComponent;
  let fixture: ComponentFixture<MatrixClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
