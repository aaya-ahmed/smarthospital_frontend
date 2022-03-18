import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { doctors } from '../modules/model/doctors';

@Injectable({
  providedIn: 'root'
})
export class CurddoctorService {

  constructor(private http:HttpClient) { }
  private url:string="https://localhost:7045/api/DoctorCrud"

  getdoctor():Observable<doctors[]>{
    return this.http.get<doctors[]>(this.url,{responseType:"json"});
    //return this.http.get<any>(this.url);
  }
  deletedoctor(id:number){
    return this.http.delete(this.url+'/'+id);
  }
  adddoctor(doctor:doctors){
    return this.http.post(this.url,doctor);
  }
}
