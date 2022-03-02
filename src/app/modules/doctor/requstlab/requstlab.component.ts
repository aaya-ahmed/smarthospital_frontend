import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-requstlab',
  templateUrl: './requstlab.component.html',
  styleUrls: ['./requstlab.component.css']
})
export class RequstlabComponent implements OnInit {
  currentpage:string='';
labs=['Adrenal gland hormone analysis','AFP Analysis = Alpha Feto-protein','Analysis of salts and minerals','ASO analysis',
  'Bleeding time (BT) measurement','Cardiac Functions','CBC complete blood picture','Cholesterol analysis',
  'Coombs Test','CRP = C - Reactive protein','Helicobacter pylori','Hepatitis C virus','HIV analysis','Insulin hormone analysis','Kidney Functions Analysis',
  'Lipids analysis','Liver functions analysis','Parathyroid gland analysis','PCR (Polymerase chain reaction) analysis',
  'Pituitary gland analysis','Preparation of sex hormones','Refer blood type and Rh factor','Salmonella (Widal) test',
  'Sedimentation rate (ESR) analysis','Semen analysis','Sputum analysis','Stool analysis','Sugar analysis',
  'Thyroid hormone analysis','transmit anemia','Triglycerides analysis','Tumor marker analysis','Urine analysis'];
  
  rays=['X-ray','X-ray with dye','rays of dye on the uterus and tubes','Mammography to detect breast tumors',
    'Computer tomography, CT Scan','magnetic resonance imaging, MRI','television rays or ultrasound (sonar)',
    'Three-dimensional and four-dimensional sonar'
    ];
  constructor(private activeroute :ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }
  prevpage(){
    this.currentpage=this.route.url;
    if(this.currentpage==='/doctor/patient/in/requestlab'){
      this.route.navigate(['/doctor/patient/in']);
    }
    else{
      this.route.navigate(['/doctor/patient/out']);

    }
  }
    }


    