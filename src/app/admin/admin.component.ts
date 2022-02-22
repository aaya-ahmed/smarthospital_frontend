import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
declare const m:any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
m(){
  m();
}  
}
