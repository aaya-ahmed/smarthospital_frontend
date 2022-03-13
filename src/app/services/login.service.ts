import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logindata } from '../main component/login/logindata';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }
  private baseurl:string="https://localhost:7163/api/Authentication/login";
  auth_user(user:logindata){
return this.http.post(this.baseurl,user,{responseType:'text'});
   
  }

 }
