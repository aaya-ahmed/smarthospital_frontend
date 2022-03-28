import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { buffer } from 'rxjs';
import { CurddoctorService } from 'src/app/services/curddoctor.service';
declare const openmodel:any;
declare const cancelmodel:any;
declare const setimage:any;

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['../styles/users.css']
})
export class DoctorComponent implements OnInit {
  dropdowntoggle:boolean=false;
  doctorlist:any=[];
  selectedfile:any;
  dotorInfo:FormGroup=new FormGroup({
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
    image :new FormControl(''),
    department :new FormControl('',[Validators.required]),
    degree :new FormControl('',[Validators.required]),
    specialization :new FormControl('',[Validators.required])}
  );
  updateInfo:FormGroup=new FormGroup({
    oldusername:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9'-'\s]*")]),
    newmail:new FormControl('',[Validators.pattern("[a-z A-Z 0-9]+@[a-z]+\.[a-z]{2,}$")]),
    newphonenumber:new FormControl('',[Validators.required,Validators.pattern("^(010|011|012|015)[0-9]{8}$") ,Validators.maxLength(11) ,Validators.minLength(11)]),
    newstate :new FormControl('',[Validators.required]),
    newdegree :new FormControl('',[Validators.required])}
  );
  constructor(private router:Router,private service:CurddoctorService) { 
  }

  ngOnInit(): void {
        this.service.getdoctor().subscribe(res=>this.doctorlist=res);
  }
//call getdoctor service to get alldoctor
  alldoctors(){
    this.service.getdoctor().subscribe(res=>{
      this.doctorlist=res;    
    });
    
  } 
//call deletedoctor service to delete special doctor
 deletedoctor(id:number){
   this.service.deletedoctor(id).subscribe(res=>console.log("success"));
   this.service.getdoctor().subscribe(res=>this.doctorlist=res);
  }
  adddoctor(){
   // const fd=new FormData()
   // fd.append('image',this.selectedfile,this.selectedfile.name)
    if(this.dotorInfo.valid){
      let doctor:any={
        Degree:this.dotorInfo.controls['degree'].value,
        specialization:this.dotorInfo.controls['specialization'].value,
        name:this.dotorInfo.controls['fname'].value+' '+this.dotorInfo.controls['lname'].value,
        age:parseInt(this.dotorInfo.controls['age'].value),
        mail:this.dotorInfo.controls['mail'].value,
        //username:this.dotorInfo.controls['username'].value,
        //hiringdate:this.dotorInfo.controls['hiringdate'].value,
        NID:""+this.dotorInfo.controls['nid'].value,
        //image:fd,
        blood_group:"a+",
        mob_num:""+this.dotorInfo.controls['phonenumber'].value,
        gender:this.dotorInfo.controls['gender'].value,
        password:this.dotorInfo.controls['password'].value,
        //هتتمسح bloodgroup,job
        job:"doctor",
        address:this.dotorInfo.controls['address'].value
        //department:this.dotorInfo.controls['department'].value
      };
    this.service.adddoctor(doctor).subscribe(res=>{console.log(res)})
  }
  }
//محتاج تعديل
  search(docInf:any){
  //let name=docInf.username;
  //let degree=docInf.degree;
  //let specialization=docInf.specialization;
  this.doctorlist=[];
    this.service.getdoctorbyid(3).subscribe(res=>{this.doctorlist.push(res);},
      err=>{console.log(err)}
      );
  }
  updatedoctor(){}
  onfileselected(event:any){
    this.selectedfile=<File>event.target.files[0];

  }
  toggledropdown(){
    this.dropdowntoggle=!this.dropdowntoggle;
  }
  openmodel(element:string){
    openmodel(element);
  }
  cancelmodel(element:string){
    cancelmodel(element);
  }
}
