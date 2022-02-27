import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalAnalysisComponent } from './medical-analysis.component';

const routes: Routes = [
  { path: '', component:MedicalAnalysisComponent,children: [
   
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalAnalysisRoutingModule { }
