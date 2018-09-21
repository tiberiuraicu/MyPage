import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { LoginService } from '../services/loginService/login.service';
import { logoTrigger, fadeNavBarTrigger } from './nav-bar.animations';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    logoTrigger,
    fadeNavBarTrigger
  ]
})
export class NavBarComponent {
  currentUser = localStorage.getItem("currentEmail")
  isHovered: boolean;
  menuItems = [
    { text: 'HOME',    link: "home"    },
    { text: 'CONTACT', link: "contact" },
    { text: 'LOGIN',   link: "login"   },
    { text: 'SIGN UP', link: "signup"  },
    { text: 'USER',    link: "user"    },
    { text: 'LOG OUT', link: "home"    }
  ]

  constructor(private loginService: LoginService) { }

  hovered() { this.isHovered = true; }
  unhovered() { this.isHovered = false; }

  checkIsHidden(text) {
    if (text == "LOGIN"  || text == "SIGN UP") 
       if (this.loginService.checkLogin()) 
          return true;
    if (text == "LOG OUT" || text == "USER") 
       if (!this.loginService.checkLogin()) 
          return true;
  }
}
