import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logindata } from '../main component/login/logindata';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
<<<<<<< HEAD
  constructor(private http:HttpClient) { }
  private baseurl:string="https://localhost:7163/api/Authentication/login";
  auth_user(user:logindata){
return this.http.post(this.baseurl,user,{responseType:'text'});
   
=======
private baseurl:string="https://localhost:7163/api/Authentication/login";
  constructor(private http:HttpClient) { }
 
  auth_user(id:string,password:string) : Observable<login[]> {
    let queryParams = {"id":id,"password":password};
   return this.http.get<login[]>(this.baseurl,{params:queryParams}).pipe(map((res=>{return res})));
>>>>>>> c60598ff813c40690ec19402912fd5ca75200360
  }

 }
