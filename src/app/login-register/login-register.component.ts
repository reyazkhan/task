import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators,FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth/auth.service';
import { DbserviceService } from '../Services/Database/dbservice.service';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {


  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router : Router,
    public db :DbserviceService,
    ) { }

  ngOnInit(): void {
  }

  signUpButton = document.getElementById('signUp');
  signInButton = document.getElementById('signIn');
  loginForm=true;
  registerForm=false;


  userLoginDetails:any=this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
  });

  registerUserDetail:any = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15),
    Validators.pattern(/^[a-zA-Z ]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    gender: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    },{validator:this.passwordMatchValidator("password","confirmPassword")
    }
  );

  passwordMatchValidator(pass:any,confirmPass:any) {
    return (fg: FormGroup)=>{
      const real_password=fg.controls[pass];
      const match_password=fg.controls[confirmPass];
      if(real_password.value!==match_password.value){
        match_password.setErrors({passwordMatchValidator:true})
      }
      else{
        match_password.setErrors(null);
      }
    }
 }
  userLogin(){
    console.log(this.userLoginDetails.value);
    if(this.userLoginDetails.invalid)
    {
      this.userLoginDetails.get('email').markAsTouched();
      this.userLoginDetails.get('password').markAsTouched();

      return;
    }
    else{
      console.log("Succesfully Login");
      this.authService.signin(this.userLoginDetails.value).subscribe(res=>{
        console.log(res);
        this.db.login = true;
        localStorage.setItem('token',res.token);
        this.router.navigate(['home']);
      })
    }
  }
  userRegister(){
    console.log(this.registerUserDetail.value);
    if(this.registerUserDetail.invalid) {
      console.log("********* invalid form ********");

      this.registerUserDetail.get('name').markAsTouched();
      this.registerUserDetail.get('email').markAsTouched();
      this.registerUserDetail.get('number').markAsTouched();
      this.registerUserDetail.get('gender').markAsTouched();
      this.registerUserDetail.get('password').markAsTouched();
      this.registerUserDetail.get('confirmPassword').markAsTouched();
      // this.registerUserDetail.markAllAsTouched();

      return;
    }
    else {
      console.log("---------Sucesss----------");

    //   this.authService.register(this.registerUserDetail.value).subscribe(
    //     result => {
    //       console.log(result)
    //     },
    //     error => {
    //       console.log(error);
    //       this.errors = error.error;
    //     }
    //   )
    }
  }

}
