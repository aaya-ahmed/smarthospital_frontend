import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  rest:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required]),
    userpass:new FormControl('',[Validators.required]),
    userrole:new FormControl('',[Validators.required])
  
  });
  //make variabe for error message when don't found user
  errormes:string='';
  //to get control list for each element in form
    get usernamev(){
      return this.rest.controls['username']
    }
    get userpassv(){
      return this.rest.controls['userpass']
    }
    get userrolev(){
      return this.rest.controls['userrole']
    }
  constructor() { }

  ngOnInit(): void {
  }
  submit(){}
}
