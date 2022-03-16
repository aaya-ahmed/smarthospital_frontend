import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { LogInAndOutService } from 'src/app/services/LogInAndOut.service';
declare const  togglebar:any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  toggle=false;
   activecomponent:string='';
  constructor(private active:ActivatedRoute,private route:Router,private service:LogInAndOutService) {}

  ngOnInit(): void {
    if(localStorage.getItem("MyRole")=="admin"){
    }
    else{this.route.navigate(['/home'])}
  }

  namecomponent(name_component:string){
    this.activecomponent=name_component;
  }

  togglebar(){
    this.toggle=!this.toggle;
    togglebar(this.toggle);
  }
  logout(){
    this.service.logout();
    this.route.navigate(['/home'])
  }
  gotohome(){
    this.route.navigate(['/home'])
  }
}
