import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { ReceptionistComponent } from './receptionist.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@NgModule({
  declarations: [
    ReceptionistComponent
  ],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
    HttpClientModule
  ]
})
export class ReceptionistModule {
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

