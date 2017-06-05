import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { contentHeaders } from '../../common/headers';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = null;

  usernameError = '';
  passwordError = '';

  constructor(public router: Router, public http: Http) { }

  ngOnInit() {
  }

  badUsername(username) {
    username = username.trim();
    if ((username === '') || !(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(username))) {
      this.usernameError = 'Enter proper username';
      return true;
    }
    this.usernameError = '';
    return false;
  }

  badPassword(password) {
    password = password.trim();
    if (password === '') {
      this.passwordError = 'Enter proper password';
      return true;
    }
    this.passwordError = '';
    return false;
  }

  login(event, username, password) {
    event.preventDefault();
    const body = 'email=' + username + '&password=' + password;
    if (this.badUsername(username)) {
      return false;
    }
    if (this.badPassword(password)) {
      return false;
    }

    this.http.post('http://www.kidzqui.com/controller/UserController.cfc?method=loginUser', body, { headers: contentHeaders }).map(
      (response) => response.json()
    ).subscribe(
        (response) => {
          if (response[0].NAME) {
            localStorage.setItem('name', response[0].NAME);
            localStorage.setItem('type', response[0].USERTYPE);
            this.router.navigate(['home']);
          } else {
            this.data = response;
          }
      });
  }
}
