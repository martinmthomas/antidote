import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisScanComponent } from './analysis-scan.component';

describe('AnalysisScanComponent', () => {
  let component: AnalysisScanComponent;
  let fixture: ComponentFixture<AnalysisScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
