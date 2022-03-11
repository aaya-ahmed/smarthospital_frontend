import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeAppoinmentComponent } from 'src/app/main component/make-appoinment/make-appoinment.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { ShowVitalSignsComponent } from '../shared component/show-vital-signs/show-vital-signs.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorComponent } from './doctor.component';
import { PatientComponent } from './patient/patient.component';
import { RequstlabComponent } from './requstlab/requstlab.component';


const routes: Routes = [
  { path: '', component:DoctorComponent,children: [
    {path:'dashboard',component:DashboardComponent},
    {path:'appointments',component:AppointmentsComponent},
    {path:'patient/:type',component:PatientComponent},
    {path: 'patient/in/vital-signs',component:ShowVitalSignsComponent},
    {path: 'patient/out/add-prescription',component:AddPrescriptionComponent},
    {path: 'patient/in/add-prescription',component:AddPrescriptionComponent},
    {path:'patient/out/appointment',component:MakeAppoinmentComponent},
    {path:'patient/out/requestlab',component:RequstlabComponent},
    {path:'patient/in/requestlab',component:RequstlabComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
