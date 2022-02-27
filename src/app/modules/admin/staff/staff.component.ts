import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { staff } from '../model/staff';
declare const openmodel:any;
declare const cancelmodel:any;
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  department:string='';
  stafflist:staff[]=[{image:"",name:"ahmed",id:2783567,email:"ahmed@gmail.com",gender:"male",age:25,address:"alhoria",phone:100943,department:"labratory"},
  {image:"",name:"rana",id:6989867,email:"rana@gmail.com",gender:"female",age:25,address:"alhoria",phone:106743,department:"ray"},
  {image:"",name:"sara",id:3980267,email:"sara@gmail.com",gender:"female",age:25,address:"alhoria",phone:102543,department:"receptionist"},
  {image:"",name:"mohamed",id:6983007,email:"mohamed@gmail.com",gender:"male",age:25,address:"alhoria",phone:106743,department:"labratory"}];
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  openmodel(){
    openmodel();
  }
  cancelmodel(){
    cancelmodel();
  }
  search(){}
  setdep(department:any){
    this.department=department.target.value;
  }
}
