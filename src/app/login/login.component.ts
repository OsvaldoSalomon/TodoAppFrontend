import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Osvaldo';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // if (this.username==="user" && this.password === '123') {
    if (this.auth.authenticate(this.username, this.password)) {
      this.invalidLogin = false
      this.router.navigate(['/welcome', this.username])
    } else {
      this.invalidLogin = true
    }
  }

}
