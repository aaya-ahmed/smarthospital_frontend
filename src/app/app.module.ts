import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AdminModule } from './modules/admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main component/home/home.component';
import { LoginComponent } from './main component/login/login.component';
import { MedicalAnalysisComponent } from './modules/medical-analysis/medical-analysis.component';
import { NurseComponent } from './modules/nurse/nurse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MedicalAnalysisComponent,
    NurseComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule ,
  HttpClientModule,
FormsModule,
ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
