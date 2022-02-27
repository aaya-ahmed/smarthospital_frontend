import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadiologistComponent } from './radiologist.component';


const routes: Routes = [
  { path: '', component:RadiologistComponent,children: [
   
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadiologistRoutingModule { }
