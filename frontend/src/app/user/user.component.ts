import { Component } from '@angular/core';
import { UserServiceService } from '../services/userService/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  messages() {
    this.router.navigate(['messenger'], { relativeTo: this.route })
  }
  userPage(){
    this.router.navigate(['user-page'], { relativeTo: this.route })
  }
}


