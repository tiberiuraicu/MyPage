import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../services/userService/user-service.service';

@Component({
  selector: 'user-profile-picture',
  templateUrl: './user-profile-picture.component.html',
  styleUrls: ['./user-profile-picture.component.scss']
})
export class UserProfilePictureComponent implements OnInit {
  selectedProfilePicture: File = null;
  currentProfilePicture: String = null;
  changeProfilePicture = false;
  uploadButtonActivated=true;
  constructor(private userService: UserServiceService) { }

  onFileSelect(event) {
    this.selectedProfilePicture = <File>event.target.files[0];
    this.uploadButtonActivated=false;
  }

  onUploadProfilePicture() {
    this.userService.uploadProfilePicture(this.selectedProfilePicture)
  }

  ngOnInit() {
    this.userService.getProfilePicture(localStorage.getItem("currentEmail")).subscribe(res => {
      this.currentProfilePicture = JSON.parse(JSON.stringify(res))._body;
    });
    console.log(this.currentProfilePicture);
  }
  visibilityOfChangeProfilePictureDiv() {
    this.changeProfilePicture = !this.changeProfilePicture;
    console.log(this.changeProfilePicture)
  }

}
