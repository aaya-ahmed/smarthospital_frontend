import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInAndOutService } from 'src/app/services/LogInAndOut.service';
import { logindata } from './logindata';
declare const error:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route:Router,private service:LogInAndOutService) { }
  ngOnInit(): void {
    //when user is login mustn't show login page
    let isLoggedIn=this.service.IsLoggedIn();
    if(isLoggedIn){
      this.route.navigate(['/'+localStorage.getItem("MyRole")])
    }
  }
  //validation requirement for loginform
  login:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required]),
    userpass:new FormControl('',[Validators.required]),
    userrole:new FormControl('',[Validators.required])
  });
  //make variabe for error message when don't found user
  errormes:string='';
  //to get control list for each element in form
  get usernamev(){
    return this.login.controls['username']
  }
  get userpassv(){
    return this.login.controls['userpass']
  }
  get userrolev(){
    return this.login.controls['userrole']
  }
  //validate user data
  submit(){
    if(this.login.valid){
      let user:logindata={'UserName':this.usernamev.value,'Password':this.userpassv.value};
      this.service.auth_user(user).subscribe(
        res=>{
          let obj={token:res};
          localStorage.setItem("MyToken",JSON.parse(JSON.stringify(obj)).token);
          localStorage.setItem("MyRole",this.userrolev.value);
          this.route.navigate(['/'+this.userrolev.value])
        },
        err=>{
          this.errormes=err.error;
          error(this.errormes);
        }
        );
      }
  }
}