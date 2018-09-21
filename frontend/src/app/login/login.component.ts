import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from '@angular/animations';
import { fadeInAnimation } from '../animations';
import { delay } from 'q';
import { LoginService } from '../services/loginService/login.service';
import { Jsonp } from '@angular/http';
import { drop } from './loginAnimations';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/userService/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [

  ]
})
export class LoginComponent {
  private info;
  private model = { 'email': '', 'password': '' }
  private currentEmail;

  constructor(private loginService: LoginService, private router : Router) {
    this.currentEmail = localStorage.getItem("currentEmail");

  }

  onSubmit() {
    this.loginService.sendCredential(this.model).subscribe(
      data => {
        localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body)
        localStorage.setItem("currentEmail", this.model.email);
        this.router.navigate(['/user'])
        location.reload();
      },
      error => console.log(error)
    );
  }


}
