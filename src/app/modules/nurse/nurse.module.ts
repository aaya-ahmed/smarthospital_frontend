import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NurseRoutingModule } from './nurse-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddVitalSignsComponent } from './add-vital-signs/add-vital-signs.component';
import { FormsModule } from '@angular/forms';
import { ShowMedicineComponent } from './show-medicine/show-medicine.component';


@NgModule({
  declarations: [
    AddVitalSignsComponent,
    ShowMedicineComponent
  ],
  imports: [
    CommonModule,
    NurseRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class NurseModule { }
