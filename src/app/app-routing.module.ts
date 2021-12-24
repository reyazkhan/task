import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Services/AuthGuard/auth.guard';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  {path:'',component: UsersListComponent},
  {path: 'user_details/:id',component:UserDetailsComponent},
  {path: 'user_edit/:id',component:UserEditComponent},
  {path:'user_add',component:UserAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
