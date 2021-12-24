import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from '../Services/Database/dbservice.service';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(public dbservice:DbserviceService,public router:Router) { }
  userList:any = [];
  totalPages:any;
  limit:any;
  loading:boolean = true;
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dbservice.getAllUsers(this.page).subscribe((res:any)=>{
      console.log(res);
      this.loading =false;
      this.userList = res.data;
      this.totalPages = res.meta.pagination.pages;
      this.limit = res.meta.pagination.limit;
    })
  }

  goToUserDetails(id:any){
    console.log("user id",id);
    this.router.navigate(['/user_details/'+id]);
  }

  goToEditUsers(id:any)
  {
    console.log("user id",id);
    this.router.navigate(['/user_edit/'+id]);
  }
  deleteUser(id:any)
  {
    console.log("user id",id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this user",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      console.log(result);
      
      if (result.isConfirmed) {
        this.dbservice.deleteUser(id).subscribe((res:any) =>{
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User Deleted Sucessfully',
            showConfirmButton: false,
            timer: 1500
          })
          this.getData()
        })
      }
    })
  }

  page:any=1;
  getPageData(type:any)
  {
    console.log("pagination works");
    
    if(type == 'previous')
    {
      if(this.page > 1)
      {
        this.page = this.page - 1;
        this.loading = true;
        this.getData();
      }
    }
    if(type == 'next')
    {
      this.page = this.page + 1;
      this.loading = true;
      this.getData();
      
    }
  }

}
