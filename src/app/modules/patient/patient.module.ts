import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from '../patient/patient.component';
import { ActivatedRoute, Router } from '@angular/router';


@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { 
  constructor(private active:ActivatedRoute,private route:Router) {}

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("MyToken");
    localStorage.removeItem("MyRole");
    this.route.navigate(['/home'])
  }

}
