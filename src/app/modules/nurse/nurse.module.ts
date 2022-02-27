import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NurseRoutingModule } from './nurse-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NurseRoutingModule,
    HttpClientModule
  ]
})
export class NurseModule { }
