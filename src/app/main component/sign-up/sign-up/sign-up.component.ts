import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import { signupdata } from './signupdata';
import { FormsModule } from '@angular/forms';

declare const encodeImageFileAsURL:any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  errormes:string='';
  constructor(private router:Router,private service:SignupService) { }
  signup:FormGroup=new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+"), Validators.minLength(3), Validators.maxLength(25) ]),
    lastName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+"),Validators.minLength(3), Validators.maxLength(25) ]),
    userName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9'-'\s]*")]),
    age:new FormControl('',[Validators.required,Validators.pattern("^[1-9]{2}$")]),
    image:new FormControl('',),
    nationalId:new FormControl('',[Validators.required,Validators.pattern("^(2|3)[0-9]{13}$"),Validators.minLength(14), Validators.maxLength(14)]),
    bloodType:new FormControl('',),
    phoneNumber:new FormControl('',[Validators.required,Validators.pattern("^(010|011|012|015)[0-9]{8}$") ,Validators.maxLength(11) ,Validators.minLength(11)]),
    address:new FormControl(''),
    gender:new FormControl('',[Validators.required]),
    mail:new FormControl('',[Validators.pattern("[a-z A-Z 0-9]+@[a-z]+\.[a-z]{2,}$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.*[0-9])[a-zA-Z0-9 @ ? -]+$')]),
  
  });
   
  ngOnInit(): void {
  }
  get userfirstnamex(){
    return this.signup.controls['firstName']
  }
  get userlastnamex(){
    return this.signup.controls['lastName']
  }
  get usernamex(){
    return this.signup.controls['userName']
  }
  get useragex(){
    return this.signup.controls['age']
  }
  get userimagex(){
    return this.signup.controls['image']
  }
  get usernationalidx(){
    return this.signup.controls['nationalId']
  }
  get userbloodx(){
    return this.signup.controls['bloodType']
  }
  get userphonex(){
    return this.signup.controls['phoneNumber']
  }
  get useraddressx(){
    return this.signup.controls['address']
  }
  get usergenderx(){
    return this.signup.controls['gender']
  }
  get usermailx(){
    return this.signup.controls['mail']
  }
  get userpassx(){
    return this.signup.controls['password']
  }
   signdata:signupdata[]=[];
  n:string='';
  
  submit(){
   // this.n=encodeImageFileAsURL();
   // console.log(encodeImageFileAsURL());
   console.log(this.userfirstnamex.valid);
   console.log(this.userlastnamex.valid);
   
   console.log(this.usernamex.valid);
   console.log(this.useragex.valid);
   console.log(this.usermailx.valid);;
  
   console.log(this.userpassx.valid);
   console.log(this.userpassx.value);
   console.log(this.usernationalidx.valid);
   console.log(this.userimagex.valid);
   console.log(this.usergenderx.valid);
   console.log(this.userphonex.valid);
   console.log(this.useraddressx.valid);
   console.log(this.userbloodx.valid);
    if(this.signup.valid){
     
      let patient:signupdata={'firstName':this.userfirstnamex.value,
      'lastName':this.userlastnamex.value,
      'age':this.useragex.value,
      'nationalId':this.usernationalidx.value,
      'image':"",
      'bloodType':this.userbloodx.value,
      'phoneNumber':this.userphonex.value,
      'address':this.useraddressx.value,
      'gender':this.usergenderx.value,
      'userName':this.usernamex.value,
      'mail':this.usermailx.value,
      'password':this.userpassx.value};
      console.log("1");
   // let patient:signupdata=new signupdata(this.userfirstnamex.value,this.userlastnamex.value,this.useragex.value,this.usernationalidx.value,this.userimagex.value,this.userbloodx.value,this.userphonex.value,this.useraddressx.value,this.usergenderx.value,this.usernamex.value,this.usermailx.value,this.userpassx.value);
     this.service.addpatient(patient).subscribe(
      (res:any)=>{
         this.router.navigate(['../login']);
    }
    ,
  (err)=>{
    this.errormes=err;
    console.log(err);
    this.errormes=err.error;}
   );}
    else{
      this.errormes='please enter yor username and password'
      console.log(this.errormes);
  }}
}

