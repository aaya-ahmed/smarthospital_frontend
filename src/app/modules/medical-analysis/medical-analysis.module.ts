import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalAnalysisRoutingModule } from './medical-analysis-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MedicalAnalysisRoutingModule,
    HttpClientModule
  ]
})
export class MedicalAnalysisModule { 
  constructor(private active:ActivatedRoute,private route:Router) {}

  ngOnInit(): void {
    console.log( localStorage.getItem("MyToken"));
  }

  logout(){
    localStorage.removeItem("MyToken");
    localStorage.removeItem("MyRole");
    this.route.navigate(['/home'])
  }
}
