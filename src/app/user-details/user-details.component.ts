import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DbserviceService } from '../Services/Database/dbservice.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,public dbservice:DbserviceService,public fb : FormBuilder) { }
  loading:any = true;

  userDetails = this.fb.group({
    name:[{value: '',disabled:true}],
    email:[{value: '',disabled:true}],
    gender:[{value: '',disabled:true}],
    status:[{value: '',disabled:true}],
  })
  ngOnInit(): void {
    const allParams = this.activatedRoute.snapshot.params 
    console.log("allparams",allParams);
    this.dbservice.getUserDetails(allParams.id).subscribe((res:any) => {
      console.log(res);
      this.loading = false;
      this.userDetails.patchValue({
        name: res.data.name,
        email: res.data.email,
        gender: res.data.gender,
        status: res.data.status,
      })
    })

    
  }

}
