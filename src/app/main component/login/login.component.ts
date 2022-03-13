import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { logindata } from './logindata';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route:Router,private service:LoginService,private toastr:ToastrService) { }
  ngOnInit(): void {
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
      console.log(res);
      let token=res;
      localStorage.setItem("MyToken",token);
     this.route.navigate(['/'+this.userrolev.value])
  },
  err=>{
    console.log('');
   // this.errormes=err.error;
  });}
  else{
    this.errormes='please enter yor username and password'
}
}}