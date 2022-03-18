import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CurddoctorService } from 'src/app/services/curddoctor.service';
import { doctors } from '../../model/doctors';
declare const openmodel:any;
declare const cancelmodel:any;

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private router:Router,private service:CurddoctorService) { 
  }

  ngOnInit(): void {
        this.service.getdoctor().subscribe(res=>this.doctor=res);

  }
  dropdowntoggle:boolean=false;
  doctor:any=[];
  specialist:string='';
  openmodel(){
    openmodel();
  }
  cancelmodel(){
    cancelmodel();
  }
  setspec(specialist:any){
    this.specialist=specialist.target.value;
  }
alldoctors(){
  this.service.getdoctor().subscribe(res=>this.doctor=res);
} 
deletedoctor(id:number){
  this.service.deletedoctor(id).subscribe(
    res =>{console.log(res)});
  this.service.getdoctor().subscribe(res=>console.log("success"));  
}
search(docInf:any){

}
adddoctor(){
 // let doctor:doctors={};
  //this.service.adddoctor(doctor).subscribe(res=>{console.log(res)})

}
toggledropdown(){
  this.dropdowntoggle=!this.dropdowntoggle;
}
}
