import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { login } from './log';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route:Router,private service:LoginService) { }
  ngOnInit(): void {
  }
  
login:FormGroup=new FormGroup({
  userid:new FormControl('',[Validators.required]),
  userpass:new FormControl('',[Validators.required])
});
  get useridv(){
    return this.login.controls['userid']
  }
  get userpassv(){
    return this.login.controls['userpass']
  }
  submit(){}
 /* loginform:login[]=[];
submit(){
  let id:string=this.useridv.value;
  let pass:string=this.userpassv.value;
  this.service.auth_user(id,pass).subscribe(res=>{const user=res.find((a:any)=>{
  if (a.id===id && a.password===pass){
    this.route.navigate(['/'+a.role]);
  }
  })}
  );
}*/
}