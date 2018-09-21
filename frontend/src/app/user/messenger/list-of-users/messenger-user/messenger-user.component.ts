import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { UserServiceService } from '../../../../services/userService/user-service.service';



@Component({
  selector: 'messenger-user',
  templateUrl: './messenger-user.component.html',
  styleUrls: ['./messenger-user.component.scss']
})
export class MessengerUserComponent implements OnInit {
  @Input() email;
  isClicked = false;
  currentProfilePicture: String = null;;
  constructor(private router: Router, private route: ActivatedRoute,private userService:UserServiceService) { }

  setMessageReceiver(email) {
    this.router.navigate(["/user/messenger", email], { relativeTo: this.route })
    
  }
  click1(){
    this.isClicked=true;
    console.log("da")
  }
  unclick(){
    this.isClicked=false;
    console.log("nu")
  }

  ngOnInit() {
    this.userService.getProfilePicture(this.email).subscribe(res=>{
      this.currentProfilePicture = JSON.parse(JSON.stringify(res))._body;
    })
  }

}
