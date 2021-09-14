import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from './Services/Database/dbservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';

  constructor(private router: Router,public db : DbserviceService)
  {}

  ngOnInit()
  {
    this.getToken();
  }

  getToken(){
    console.log("**** GET LOGIN TOKEN ****");
    let token = localStorage.getItem("token");
    if(token){
      this.db.login = true;
      this.router.navigate(['home']);
    }
    else{
      this.router.navigate(['login'])
    }
  }

}
