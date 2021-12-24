import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbserviceService } from '../Services/Database/dbservice.service';
import Swal from 'sweetalert2';  
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor(public fb: FormBuilder,public dbservice : DbserviceService,public location: Location) { }
  loading:any = false;
  userAddForm = this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    gender:['',Validators.required],
    status:['',Validators.required],
  })
  ngOnInit(): void {

  }

  get f()
  {
    return this.userAddForm.controls;
  }

  addUser()
  {
    // console.log(this.userAddForm.value);
    if(this.userAddForm.valid) {
      console.log("valid form");
      this.loading = true;
      this.dbservice.addUser(this.userAddForm.value).subscribe((res:any) => {
        console.log(res);
        this.loading = false;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User Added Sucessfully',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
    else{
      console.log("Inavalid Form");
      this.userAddForm.get("name")?.markAsTouched();
      this.userAddForm.get("email")?.markAsTouched();
      this.userAddForm.get("gender")?.markAsTouched();
      this.userAddForm.get("status")?.markAsTouched();
      // return;
    }
  }

  back()
  {
    this.location.back()
  }

}
