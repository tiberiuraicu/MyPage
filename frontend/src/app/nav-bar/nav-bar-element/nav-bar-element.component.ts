import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../services/loginService/login.service';

@Component({
  selector: 'nav-bar-element',
  templateUrl: './nav-bar-element.component.html',
  styleUrls: ['./nav-bar-element.component.scss']
})
export class NavBarElementComponent {
  @Input() link;
  @Input() text;
  @Input() isHovered;

  constructor(private loginService: LoginService) {}

  logout() {
    if (this.text == "LOG OUT")
      this.loginService.logout();  
  }

  
}
