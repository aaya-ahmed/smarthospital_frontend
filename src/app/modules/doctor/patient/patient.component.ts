import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
declare const toggleview:any;
declare const resetview:any;

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
constructor(private activeroute :ActivatedRoute,private route:Router) { }
private typepatient:any='';
operation:string='Appointment';
  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((params: ParamMap) => {this.typepatient=params.get('type');
    if(this.typepatient==='in')
    {this.operation="Vital-Signs"}
    else{
      this.operation='Appointment';
    }});
  }
allpatient(){}
search(){}
toggleview(){
  toggleview();
}
resetview(){
  resetview();
}
gotoappointment(){
this.route.navigate(['./doctor/patient/out/appointment']);
}
gotorequestlab(){
  if(this.typepatient==='in')
  {this.route.navigate(['./doctor/patient/in/requestlab']);
}
  else{
    this.route.navigate(['./doctor/patient/out/requestlab']);
  }
}
gotoprescription(){
  if(this.typepatient==='in')
  {this.route.navigate(['./doctor/patient/in/add-prescription']);
}
  else{
    this.route.navigate(['./doctor/patient/out/add-prescription']);
  }
}
gotoshowvital(){
  this.route.navigate(['./doctor/patient/in/vital-signs']);
}
}
