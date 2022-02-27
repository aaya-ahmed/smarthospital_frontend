import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const  togglebar:any;
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  navbartoggle=false;
  dropdowntoggle=false;
   activecomponent:string='';
  constructor(private active:ActivatedRoute) { 
    
  }

  ngOnInit(): void {

  }
  namecomponent(name_component:string){
    this.activecomponent=name_component;
  }
  togglenavbar(){
    this.navbartoggle=!this.navbartoggle;
  }
  toggledropdown(){
    this.dropdowntoggle=!this.dropdowntoggle;
  }
  togglebar(){
    togglebar();
}  
}
