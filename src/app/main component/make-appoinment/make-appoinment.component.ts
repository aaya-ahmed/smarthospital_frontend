import { Component, OnInit } from '@angular/core';
declare const cancelmodel:any;
@Component({
  selector: 'app-make-appoinment',
  templateUrl: './make-appoinment.component.html',
  styleUrls: ['./make-appoinment.component.css']
})
export class MakeAppoinmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cancelmodel(){
    cancelmodel();
  }

}
