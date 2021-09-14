import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from '../Services/Database/dbservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router,public db : DbserviceService) { }

  ngOnInit(): void {
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.db.login = false;
    this.router.navigate(['login']);
  }

}
