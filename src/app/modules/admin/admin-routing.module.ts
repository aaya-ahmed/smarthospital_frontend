import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { ReportsComponent } from './reports/reports.component';
import { DoctorComponent } from './doctor/doctor.component';
import { NurseComponent } from './nurse/nurse.component';
import { StaffComponent } from './staff/staff.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SpecialistsComponent } from './specialists/specialists.component';

const routes: Routes = [
  { path: '', component: AdminComponent,children: [
    {path: '', component: DoctorComponent},
    {path:'department',component:DepartmentsComponent},
    {path:'specialists',component:SpecialistsComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'patients', component: PatientComponent},

    {path: 'report', component:ReportsComponent},
    {path: 'staff', component:StaffComponent},
    {path: 'doctor', component:DoctorComponent},
    {path: 'nurse', component:NurseComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
