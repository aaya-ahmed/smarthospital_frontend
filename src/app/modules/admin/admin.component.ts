import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
declare const  togglebar:any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  toggle=false;
   activecomponent:string='';
  constructor(private active:ActivatedRoute) { 
    
  }

  ngOnInit(): void {

  }
  namecomponent(name_component:string){
    this.activecomponent=name_component;
  }


  togglebar(){
this.toggle=!this.toggle;
    togglebar(this.toggle);
}  
}
