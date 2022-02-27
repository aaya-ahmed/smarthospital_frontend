import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { patient } from '../model/patient';
declare const openmodel:any;
declare const cancelmodel:any;
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  private blood:string='';
  private type:string='';
  private id:number=0;
  private name:string='';
  patients:patient[]=[];
  patientlist:patient[]=[{image:"",name:"ahmed",id:2783567,email:"ahmed@gmail.com",gender:"male",age:25,address:"alhoria",phone:100943,Patienttype:"outpatient",bloodgroup:"A+",Occupation:""},
  {image:"",name:"sara",id:2783567,email:"sara@gmail.com",gender:"female",age:25,address:"alhoria",phone:100943,Patienttype:"outpatient",bloodgroup:"A+",Occupation:""},
  {image:"",name:"mohamed",id:2783567,email:"mohamed@gmail.com",gender:"male",age:25,address:"alhoria",phone:100943,Patienttype:"inpatient",bloodgroup:"B+",Occupation:""},
  {image:"",name:"mona",id:2783567,email:"mona@gmail.com",gender:"female",age:25,address:"alhoria",phone:100943,Patienttype:"inpatient",bloodgroup:"A-",Occupation:""},
];
//temp array ,used it in search operation
temp:patient[]= this.patientlist;
  constructor(private router:Router) { }
  ngOnInit(): void {
  }
  showreports(){
    this.router.navigateByUrl('/report');
  }
  delete(patient:patient){
    this.patientlist=this.patientlist.filter(item => item !== patient);
  }
  addpatient(){
    this.router.navigate(['/admin/patient/add-patient']);
  }
  setblood(blood:any){
    this.blood=blood.target.value;
  }
  setpatenttype(type:any){
    this.type=type.target.value;
  }
  setid(id:any){
    this.id=id.target.value;
  }  
  setname(name:any){
    this.name=name.target.value;
  }
  search(){
    this.patients=[];
    for(let i of this.temp){
      if(i.Patienttype==this.type&&i.bloodgroup==this.blood){
        this.patients.push(i);
        console.log(i);
      }
    }
    this.patientlist=this.patients;
  }
  all(){
    this.patientlist=this.temp;
  }
  openmodel(){
    openmodel();
  }
  cancelmodel(){
    cancelmodel();
  }
}
