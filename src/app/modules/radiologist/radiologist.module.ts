import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadiologistRoutingModule } from './radiologist-routing.module';
import { RadiologistComponent } from './radiologist.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@NgModule({
  declarations: [
    RadiologistComponent
  ],
  imports: [
    CommonModule,
    RadiologistRoutingModule,
    HttpClientModule
  ]
})
export class RadiologistModule {
  constructor(private active:ActivatedRoute,private route:Router) {}

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("MyToken");
    localStorage.removeItem("MyRole");
    this.route.navigate(['/home'])
  }
 }
