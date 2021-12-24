import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DbserviceService } from '../Services/Database/dbservice.service';
import Swal from 'sweetalert2';  
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,public dbservice:DbserviceService,public fb : FormBuilder,public location: Location) { }
  loading:any = true;

  userId:any='';
  userDetails = this.fb.group({
    name:[''],
    email:[''],
    gender:[''],
    status:[''],
  })
  ngOnInit(): void {
    const allParams = this.activatedRoute.snapshot.params 
    console.log("allparams",allParams);
    this.userId= allParams.id;
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

  editUser()
  {
    console.log(this.userDetails.value);
    this.loading = true;
    this.dbservice.editUser(this.userId,this.userDetails.value).subscribe((res:any) => {
      console.log("result: ", res);
      this.loading = false;
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User Updated Sucessfully',
        showConfirmButton: false,
        timer: 1500
      })
    })
    
  }

  back()
  {
    this.location.back()
  }

}
