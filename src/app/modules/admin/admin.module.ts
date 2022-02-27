import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PatientComponent } from './patient/patient.component';

import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor/doctor.component';
import { NurseComponent } from './nurse/nurse.component';
import { StaffComponent } from './staff/staff.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminComponent,
    PatientComponent,
    ReportsComponent,
    DashboardComponent,
    DoctorComponent,
    NurseComponent,
    StaffComponent  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    HttpClientModule
  ]
})
export class AdminModule { }
