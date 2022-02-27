import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    HttpClientModule
  ]
})
export class DoctorModule { }
