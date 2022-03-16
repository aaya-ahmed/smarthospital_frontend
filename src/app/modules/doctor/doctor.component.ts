import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInAndOutService } from 'src/app/services/LogInAndOut.service';
declare const  togglebar:any;
declare const openmodel:any;
declare const cancelmodel:any;
declare const resetview:any;

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  toggle=false;
  activecomponent:string='';

  constructor(private route:Router,private service:LogInAndOutService) { }

  ngOnInit(): void {
    if(localStorage.getItem("MyRole")=="doctor"){
    }
    else{this.route.navigate(['/home'])}
  }
togglebar(){
this.toggle=!this.toggle;
    togglebar(this.toggle);
}  
namecomponent(name_component:string){
  this.activecomponent=name_component;
}
openmodel(){
  openmodel();
}
cancelmodel(){
  cancelmodel();
}
resetview(){
  resetview();
}
logout(){
  this.service.logout();
  this.route.navigate(['/home'])
}
gotohome(){
  this.route.navigate(['/home'])
}
}
