import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalAnalysisRoutingModule } from './medical-analysis-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MedicalAnalysisRoutingModule,
    HttpClientModule
  ]
})
export class MedicalAnalysisModule { }
