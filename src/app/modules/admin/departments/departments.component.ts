import { Component, OnInit } from '@angular/core';
import { department } from '../model/department';
declare const openmodel:any;
declare const cancelmodel:any;
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departmentlist:department[]=[
    {id:1,department:"eye department",description:"",state:"active"},
    {id:2,department:"crdio department",description:"",state:"active"},
    {id:3,department:"lyzer department",description:"",state:"active"}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  openmodel(){
    openmodel();
  }
  cancelmodel(){
    cancelmodel();
  }
}
