import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activerouter.snapshot.paramMap.get('id');
  }

}
