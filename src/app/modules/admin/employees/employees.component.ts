import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { employees } from '../model/employees';
declare const openmodel:any;
declare const cancelmodel:any;
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['../styles/users.css']
})
export class EmployeesComponent implements OnInit {
  type="";
  empInfo:FormGroup=new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.minLength(3), Validators.maxLength(25) ]),
    lname:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.minLength(3), Validators.maxLength(25) ]),
    username:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9'-'\s]*")]),
    nid:new FormControl('',[Validators.required,Validators.pattern("^(2|3)[0-9]{13}$"),Validators.minLength(14), Validators.maxLength(14)]),
    gender:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.pattern("^[0-9]{2}$")]),
    hiringdate:new FormControl('',[Validators.required]),
    mail:new FormControl('',[Validators.pattern("[a-z A-Z 0-9]+@[a-z]+\.[a-z]{2,}$")]),
    password:new FormControl(''),
    phonenumber:new FormControl('',[Validators.required,Validators.pattern("^(010|011|012|015)[0-9]{8}$") ,Validators.maxLength(11) ,Validators.minLength(11)]),
    address :new FormControl(''),
    image :new FormControl('')}
  );
  updateInfo:FormGroup=new FormGroup({
    oldusername:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9'-'\s]*")]),
    newmail:new FormControl('',[Validators.pattern("[a-z A-Z 0-9]+@[a-z]+\.[a-z]{2,}$")]),
    newphonenumber:new FormControl('',[Validators.required,Validators.pattern("^(010|011|012|015)[0-9]{8}$") ,Validators.maxLength(11) ,Validators.minLength(11)]),
    newstate :new FormControl('',[Validators.required]),
    newdegree :new FormControl('',[Validators.required])}
  );
constructor(private route:Router) { }

  ngOnInit(): void {
  }
  addemloyee(){}
  updatemployee(){}
  settype(event:any){
this.type=event.target.value;
  }
  openmodel(element:string){
    openmodel(element);
  }
  cancelmodel(element:string){
    cancelmodel(element);
  }
  search(){}

}
