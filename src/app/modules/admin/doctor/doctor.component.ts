import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { doctors } from '../model/doctors';
declare const openmodel:any;
declare const cancelmodel:any;

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  dropdowntoggle:boolean=false;
doctorlist:doctors[]=[
{image:"",name:"ahmed",id:2783567,email:"ahmed@gmail.com",gender:"male",age:25,address:"alhoria",phone:100943,spec:"cardio",dgree:""},
{image:"",name:"rana",id:6989867,email:"rana@gmail.com",gender:"female",age:25,address:"alhoria",phone:106743,spec:"Neuroscience",dgree:""},
{image:"",name:"sara",id:3980267,email:"sara@gmail.com",gender:"female",age:25,address:"alhoria",phone:102543,spec:"orthopedic",dgree:""},
{image:"",name:"mohamed",id:6983007,email:"mohamed@gmail.com",gender:"male",age:25,address:"alhoria",phone:106743,spec:"cardio",dgree:""},
{image:"",name:"ahmed",id:2783567,email:"ahmed@gmail.com",gender:"male",age:25,address:"alhoria",phone:100943,spec:"cardio",dgree:""},
{image:"",name:"rana",id:6989867,email:"rana@gmail.com",gender:"female",age:25,address:"alhoria",phone:106743,spec:"Neuroscience",dgree:""},
{image:"",name:"sara",id:3980267,email:"sara@gmail.com",gender:"female",age:25,address:"alhoria",phone:102543,spec:"orthopedic",dgree:""},
{image:"",name:"mohamed",id:6983007,email:"mohamed@gmail.com",gender:"male",age:25,address:"alhoria",phone:106743,spec:"cardio",dgree:""},
{image:"",name:"ahmed",id:2783567,email:"ahmed@gmail.com",gender:"male",age:25,address:"alhoria",phone:100943,spec:"cardio",dgree:""},
{image:"",name:"rana",id:6989867,email:"rana@gmail.com",gender:"female",age:25,address:"alhoria",phone:106743,spec:"Neuroscience",dgree:""},
{image:"",name:"sara",id:3980267,email:"sara@gmail.com",gender:"female",age:25,address:"alhoria",phone:102543,spec:"orthopedic",dgree:""},
{image:"",name:"mohamed",id:6983007,email:"mohamed@gmail.com",gender:"male",age:25,address:"alhoria",phone:106743,spec:"cardio",dgree:""},
{image:"",name:"ahmed",id:2783567,email:"ahmed@gmail.com",gender:"male",age:25,address:"alhoria",phone:100943,spec:"cardio",dgree:""},
{image:"",name:"rana",id:6989867,email:"rana@gmail.com",gender:"female",age:25,address:"alhoria",phone:106743,spec:"Neuroscience",dgree:""},
{image:"",name:"sara",id:3980267,email:"sara@gmail.com",gender:"female",age:25,address:"alhoria",phone:102543,spec:"orthopedic",dgree:""},
{image:"",name:"mohamed",id:6983007,email:"mohamed@gmail.com",gender:"male",age:25,address:"alhoria",phone:106743,spec:"cardio",dgree:""},
{image:"",name:"ahmed",id:2783567,email:"ahmed@gmail.com",gender:"male",age:25,address:"alhoria",phone:100943,spec:"cardio",dgree:""},
{image:"",name:"rana",id:6989867,email:"rana@gmail.com",gender:"female",age:25,address:"alhoria",phone:106743,spec:"Neuroscience",dgree:""},
{image:"",name:"sara",id:3980267,email:"sara@gmail.com",gender:"female",age:25,address:"alhoria",phone:102543,spec:"orthopedic",dgree:""},
{image:"",name:"mohamed",id:6983007,email:"mohamed@gmail.com",gender:"male",age:25,address:"alhoria",phone:106743,spec:"cardio",dgree:""}];
doctor:doctors[]=[];
specialist:string='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  openmodel(){
    openmodel();
  }
  cancelmodel(){
    cancelmodel();
  }
  setspec(specialist:any){
    this.specialist=specialist.target.value;
  }
search(){
  for(let i of this.doctorlist){
    if(this.specialist==i.spec){
      this.doctor.push(i);
      break;
    }
}}
alldoctors(){
  this.doctorlist;
}
toggledropdown(){
  this.dropdowntoggle=!this.dropdowntoggle;
}
}
