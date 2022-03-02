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
import { SpecialistsComponent } from './specialists/specialists.component';
import { DoctorSchaduleComponent } from './doctor-schadule/doctor-schadule.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SeatBedsComponent } from './seat-beds/seat-beds.component';

@NgModule({
  declarations: [
    AdminComponent,
    PatientComponent,
    ReportsComponent,
    DashboardComponent,
    DoctorComponent,
    NurseComponent,
    StaffComponent,
    SpecialistsComponent,
    DoctorSchaduleComponent,
    DepartmentsComponent,
    SeatBedsComponent  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    HttpClientModule
  ]
})
export class AdminModule { }
