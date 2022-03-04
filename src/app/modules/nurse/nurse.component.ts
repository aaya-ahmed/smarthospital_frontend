import { Component, OnInit } from '@angular/core';
declare const  togglebar:any;
declare const openmodel:any;
declare const cancelmodel:any;
declare const resetview:any;
@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})

export class NurseComponent implements OnInit {
  toggle=false;
  activecomponent:string='';

  constructor() { }

  ngOnInit(): void {
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

}
