import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn: boolean = false;

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

}
