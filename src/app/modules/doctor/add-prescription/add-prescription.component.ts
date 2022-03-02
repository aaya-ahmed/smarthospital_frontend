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
prescription:{medicine_name:string,medicine_strength:string,instructions:string,duration:string,dose:number}[]
            =[];
switchin(medicine_name:any,medicine_strength:any,instructions:any,duration:any,dose:any){
  medicine_name.disabled=false;
medicine_strength.disabled=false;
instructions.disabled=false;
duration.disabled=false;
dose.disabled=false;}
update(medicine_name:any,medicine_strength:any,instructions:any,duration:any,dose:any){
  for(let i of this.prescription){
   
      i.medicine_name=medicine_name.value;
      i.medicine_strength=medicine_strength.value;
      i.instructions=instructions.value;
      i.duration=duration.value;
      i.dose=Number(dose.value);
  }
  medicine_name.disabled=true;
  medicine_strength.disabled=true;
  instructions.disabled=true;
  duration.disabled=true;
  dose.disabled=true;

}
add(){
  this.flag=true;
}
deleterow(id: any) {
  this.prescription.splice(id, 1);}

save(medicine_name:any,medicine_strength:any,instructions:any,duration:any,dose:any){
  if(medicine_name.errors?.required||medicine_strength.errors?.required||instructions.errors?.required||duration.errors?.required||dose.errors?.required)
{
  this.errormes=true;
}
else{this.prescription.push({'medicine_name':medicine_name.value,'medicine_strength':medicine_strength.value,'instructions':instructions.value,'duration':duration.value,'dose':Number(dose.value)})
this.errormes=false;
this.flag=false;
}

}
}
