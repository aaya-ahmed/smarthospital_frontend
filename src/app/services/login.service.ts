import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { logindata } from '../main component/login/logindata';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }
  private baseurl:string="https://localhost:7163/api/Authentication/login";
  auth_user(user:logindata){
return this.http.post<any>(this.baseurl,user);}
/*auth_user(user:logindata):Observable<any>{
 return this.http.post <any> (this.baseurl,user).pipe(map(res=>{return res} ));} */

 }
