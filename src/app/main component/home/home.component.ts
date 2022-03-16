import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInAndOutService } from 'src/app/services/LogInAndOut.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navbartoggle=false;
  islogin:boolean=false;
  constructor(private route:Router,private service:LogInAndOutService) { }  
  ngOnInit(): void {
    this.islogin=this.service.IsLoggedIn();
  }
  login(){
    this.route.navigate(['/login']);
  }
  gotomyprofile(){
    this.route.navigate(['./'+localStorage.getItem("MyRole")]);
  }
  logout(){
    this.service.logout();
    let currentUrl = this.route.url;
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.route.navigate([currentUrl]);
    });
  } 
  togglenavbar(){
    this.navbartoggle=!this.navbartoggle;
  }
}
