import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signupdata } from '../modules/signupdata';
import { patient } from '../modules/model/patient';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
 private registpatienturl:string="https://localhost:7163/api/Authentication/register";
  constructor(private http:HttpClient) { }
  addpatient(patient:signupdata){
   return this.http.post<patient>(this.registpatienturl,patient);
  }
}
