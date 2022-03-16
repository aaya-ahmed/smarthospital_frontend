import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueUnionFromArray } from 'rxjs';
import { logindata } from '../main component/login/logindata';

@Injectable({
  providedIn: 'root'
})
export class LogInAndOutService {
  constructor(private http:HttpClient) { }
  private baseurl:string="https://localhost:7163/api/Authentication/login";
  auth_user(user:logindata){
     let x =this.http.post(this.baseurl,user,{responseType:'text'});
     return x;
  }
  IsLoggedIn():boolean{
    let token=localStorage.getItem('MyToken');
    if(token){
      return true;
    }
    else{
      return false;
    }
  }
  logout(){
    localStorage.removeItem("MyToken");
    localStorage.removeItem("MyRole");
  }
}
