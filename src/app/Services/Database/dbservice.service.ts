import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(public httpClient: HttpClient) { }
  url ="https://gorest.co.in/public/v1/";
  token:any = "90a3ee024171ebddfd96d0005fd2fa21b80fd028ca944b9be57100698930af87";
  tokenPass() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };
    return httpOptions;
  }
  getAllUsers(page:any)
  {
    return this.httpClient.get(this.url+"users?page="+page);
  }

  getUserDetails(id:any)
  {
    return this.httpClient.get(this.url+"users/"+id,this.tokenPass());
  }

  editUser(id:any,values:any)
  {
    return this.httpClient.put(this.url+"users/"+id,values,this.tokenPass());
  }
  deleteUser(id:any)
  {
    return this.httpClient.delete(this.url+"users/"+id,this.tokenPass());
  }

}
