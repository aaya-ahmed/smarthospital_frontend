import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAnalysisComponent } from './medical-analysis.component';

describe('MedicalAnalysisComponent', () => {
  let component: MedicalAnalysisComponent;
  let fixture: ComponentFixture<MedicalAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
