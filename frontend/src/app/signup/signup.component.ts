import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signUpService/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  private model = { 'email': '', 'password': '' }
  constructor(private signupService: SignupService) { }

  register() {
    this.signupService.register(this.model).subscribe(data=>{
      console.log(data);
    })
  }

}
