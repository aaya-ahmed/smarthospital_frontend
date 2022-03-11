import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowVitalSignsComponent } from '../shared component/show-vital-signs/show-vital-signs.component';
import { AddVitalSignsComponent } from './add-vital-signs/add-vital-signs.component';
import { NurseComponent } from './nurse.component';
import { ShowMedicineComponent } from './show-medicine/show-medicine.component';


const routes: Routes = [
  { path: '', component:NurseComponent,children: [
   {path:'AddVitalSigns',component:AddVitalSignsComponent},
   {path:'ShowVitalSigns',component:ShowVitalSignsComponent},
   {path:'checkmedicine',component:ShowMedicineComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NurseRoutingModule { }
