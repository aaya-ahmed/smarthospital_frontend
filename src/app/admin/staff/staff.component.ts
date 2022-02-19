import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { staff } from '../staff';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  stafflist:staff[]=[];
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  addstaff(){
    this.route.navigate(['admin/staff/add-staff']);
  }
  search(){}
}
