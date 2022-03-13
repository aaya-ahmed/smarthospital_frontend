import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { login } from '../main component/login/log';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private baseurl:string="https://localhost:7163/api/Authentication/login";
  constructor(private http:HttpClient) { }
 
  auth_user(id:string,password:string) : Observable<login[]> {
    let queryParams = {"id":id,"password":password};
   return this.http.get<login[]>(this.baseurl,{params:queryParams}).pipe(map((res=>{return res})));
  }

 }
