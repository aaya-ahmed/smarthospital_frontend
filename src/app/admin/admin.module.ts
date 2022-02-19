import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PatientComponent } from './patient/patient.component';

import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor/doctor.component';
import { NurseComponent } from './nurse/nurse.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { StaffComponent } from './staff/staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';

@NgModule({
  declarations: [
    AdminComponent,
    PatientComponent,
    ReportsComponent,
    DashboardComponent,
    DoctorComponent,
    NurseComponent,
    AddPatientComponent,
    StaffComponent,
    AddStaffComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule
  ]
})
export class AdminModule { }
