import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { DoctorComponent } from './doctor/doctor.component';
import { NurseComponent } from './nurse/nurse.component';
import { EmployeesComponent } from './employees/employees.component';
import { SchaduleComponent } from './schadule/schadule.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SpecializationComponent } from './specialization/specialization.component';


const routes: Routes = [
  { path: '', component: AdminComponent,children: [
    {path: '', component: DoctorComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'doctor', component:DoctorComponent},
    {path: 'nurse', component:NurseComponent},
    {path:'employees',component:EmployeesComponent},

    {path:'schadule',component:SchaduleComponent},
    {path: 'report', component:ReportsComponent},
    {path:'departments',component:DepartmentsComponent},
    {path:'specializations',component:SpecializationComponent}  
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
