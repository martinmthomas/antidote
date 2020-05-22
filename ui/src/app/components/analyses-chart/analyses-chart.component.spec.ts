import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysesChartComponent } from './analyses-chart.component';

describe('AnalysesChartComponent', () => {
  let component: AnalysesChartComponent;
  let fixture: ComponentFixture<AnalysesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
