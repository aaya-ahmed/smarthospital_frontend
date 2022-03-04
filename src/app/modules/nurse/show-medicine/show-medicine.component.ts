import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-medicine',
  templateUrl: './show-medicine.component.html',
  styleUrls: ['./show-medicine.component.css']
})
export class ShowMedicineComponent implements OnInit {

  flag=false;
  isChecked = false;
  checkMedicine:{checkbutton:string, patient_id:number,patient_name:string,medicine_name:string,medicine_strength:string,instructions:string,medicine_type:string,dose:string,dose_time:string,doctor_name:string,nurse_sign:string}[]
            =[{ 'checkbutton':'','patient_id':1, 'patient_name':'Amira','medicine_name':'profine','medicine_strength':'1000','instructions':'after meals','medicine_type':'tablets','dose':'2 capsels','dose_time':'2pm','doctor_name':'Magdy','nurse_sign':''}];
  constructor() { }
  save( checkbutton:any , patient_id:any,nurse_sign:any){
  
    for(let i of this.checkMedicine){
      if(i.patient_id===patient_id.value){
      
      i.nurse_sign=nurse_sign.value;
      i.checkbutton=checkbutton.value
      }   
  }
  checkbutton.disabled=true;
  nurse_sign.disabled=true;

}
  
  
  ngOnInit(): void {
  }
}
