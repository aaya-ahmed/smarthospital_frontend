import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { ReceptionistComponent } from './receptionist.component';
import { HttpClientModule } from '@angular/common/http';


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
export class ReceptionistModule { }
