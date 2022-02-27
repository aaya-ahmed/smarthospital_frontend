import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadiologistRoutingModule } from './radiologist-routing.module';
import { RadiologistComponent } from './radiologist.component';
import { HttpClientModule } from '@angular/common/http';


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
export class RadiologistModule { }
