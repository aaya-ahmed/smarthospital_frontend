import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:{id:string,password:string}[]=[{id:"1234",password:"admin"},
             {id:"1234",password:"doctor"},
             {id:"1234",password:"nurse"},
             {id:"1234",password:"receptionist"},
             {id:"1234",password:"patient"},
             {id:"1234",password:"lab"}];
  flag:boolean=false;
  constructor(private route:Router,private elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  login(id:string,pass:string){
    for(let i of this.user){
      if(i.id==id &&pass==i.password){
        this.flag=true;
            break;
      }

    }
    if (this.flag==true){
      this.ngOndestroy();
      this.route.navigate(['/admin']);
    }
  }
  ngOndestroy() {
    this.elementRef.nativeElement.remove();
  }

}




