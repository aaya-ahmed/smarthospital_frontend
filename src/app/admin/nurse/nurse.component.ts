import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { nurse } from '../nurse';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {
  nurselist:nurse[]=[
    {image:"",name:"ahmed",id:2783567,email:"ahmed@gmail.com",gender:"male",age:25,address:"alhoria",phone:100943,dgree:"",department:""},
    {image:"",name:"rana",id:6989867,email:"rana@gmail.com",gender:"female",age:25,address:"alhoria",phone:106743,dgree:"",department:""},
    {image:"",name:"sara",id:3980267,email:"sara@gmail.com",gender:"female",age:25,address:"alhoria",phone:102543,dgree:"",department:""},
    {image:"",name:"mohamed",id:6983007,email:"mohamed@gmail.com",gender:"male",age:25,address:"alhoria",phone:106743,dgree:"",department:""},
    ];
    nurse:nurse[]=[];
    gender:string='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addNurse(){
    this.router.navigate(["admin/nurse/add-nurse"]);
  }
  setspec(gender:any){
    this.gender=gender.target.value;
  }
search(){
  for(let i of this.nurselist){
    if(this.gender==i.gender){
      console.log(this.gender);
      this.nurse=[];
      this.nurse.push(i);
      break;
    }
}
console.log(this.nurse);
}
}
