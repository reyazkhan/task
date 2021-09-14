import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private route:Router) { }
  // User registration
  register(user:any){
    console.log(user);
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }

  // Login
  signin(user:any){
    return this.http.post<any>('https://reqres.in/api/login', user);
  }
}
