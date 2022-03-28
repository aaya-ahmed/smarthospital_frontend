import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor/doctor.component';
import { NurseComponent } from './nurse/nurse.component';
import { HttpClientModule } from '@angular/common/http';
import { SeatBedsComponent } from './seat-beds/seat-beds.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurddoctorService } from 'src/app/services/curddoctor.service';
import { EmployeesComponent } from './employees/employees.component';
import { SchaduleComponent } from './schadule/schadule.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { DepartmentsComponent } from './departments/departments.component';

@NgModule({
  declarations: [
    AdminComponent,
   EmployeesComponent,
    ReportsComponent,
    DashboardComponent,
    DoctorComponent,
    NurseComponent,
    SeatBedsComponent,
    SchaduleComponent,
    SpecializationComponent,
    DepartmentsComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[CurddoctorService]
})
export class AdminModule { }
