import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNurseComponent } from './add-nurse/add-nurse.component';
import { PatientComponent } from './patient/patient.component';
import { ReportsComponent } from './reports/reports.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { NurseComponent } from './nurse/nurse.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { StaffComponent } from './staff/staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';

const routes: Routes = [
  { path: '', component: AdminComponent,children: [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'patients', component: PatientComponent},
    {path: 'patient/add-patient', component:AddPatientComponent},
    {path: 'report', component:ReportsComponent},
    {path: 'staff', component:StaffComponent},
    {path: 'staff/add-staff', component:AddStaffComponent},
    {path: 'doctor', component:DoctorComponent},
    {path: 'doctor/add-doctor', component:AddDoctorComponent},
    {path: 'nurse', component:NurseComponent},
    {path: 'nurse/add-nurse', component:AddNurseComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
