import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseComponent } from './nurse.component';


const routes: Routes = [
  { path: '', component:NurseComponent,children: [
   
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NurseRoutingModule { }
