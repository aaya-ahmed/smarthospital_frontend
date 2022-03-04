import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flag=false;
  errormes=false;
prescription:{medicine_name:string,medicine_strength:string,instructions:string,medicine_type:string,duration:number,repitition_number:number,dose:string}[]
            =[];
switchin(medicine_name:any,medicine_strength:any,instructions:any,duration:any,medicine_type:any,repitition_number:any,dose:any){
  medicine_name.disabled=false;
medicine_strength.disabled=false;
instructions.disabled=false;
duration.disabled=false;
medicine_type.disabled=false;
dose.disabled=false;
repitition_number.disabled=false;}
update(medicine_name:any,medicine_strength:any,instructions:any,duration:any,medicine_type:any,repitition_number:any,dose:any){
  for(let i of this.prescription){
   
      i.medicine_name=medicine_name.value;
      i.medicine_strength=medicine_strength.value;
      i.instructions=instructions.value;
      i.duration=Number(duration.value);
      i.medicine_type=medicine_type.value;
      i.dose=dose.value;
      i.repitition_number=Number(repitition_number.value);
  }
  medicine_name.disabled=true;
  medicine_strength.disabled=true;
  instructions.disabled=true;
  duration.disabled=true;
  medicine_type.disabled=true;
  dose.disabled=true;
  repitition_number.disabled=true;

}
add(){
  this.flag=true;
}
deleterow(id: any) {
  this.prescription.splice(id, 1);}

save(medicine_name:any,medicine_strength:any,instructions:any,duration:any,medicine_type:any,repitition_number:any,dose:any){
  if(medicine_name.errors?.required||medicine_strength.errors?.required||instructions.errors?.required||duration.errors?.required||repitition_number.errors?.required||dose.errors?.required||medicine_type.errors?.required)
{
  this.errormes=true;
}
else{this.prescription.push({'medicine_name':medicine_name.value,'medicine_strength':medicine_strength.value,'instructions':instructions.value,'duration':duration.value,'medicine_type':medicine_type.value, 'repitition_number':Number(repitition_number.value),"dose":dose.value})
this.errormes=false;
this.flag=false;
}

}
}
