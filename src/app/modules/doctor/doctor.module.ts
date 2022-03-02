import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientComponent } from './patient/patient.component';
import { RequstlabComponent } from './requstlab/requstlab.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { ShowVitalSignsComponent } from './show-vital-signs/show-vital-signs.component';


@NgModule({
  declarations: [
    DoctorComponent,
    AppointmentsComponent,
    PatientComponent,
    RequstlabComponent,
    DashboardComponent,
    AddPrescriptionComponent,
    ShowVitalSignsComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class DoctorModule { }
