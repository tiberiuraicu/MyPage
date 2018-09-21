import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailIsClicked = true;
  nameIsClicked = true;
  messageIsClicked = true;

  isClicked(name) {
    if (name == 'email') this.emailIsClicked = !this.emailIsClicked;
    if (name == 'name') this.nameIsClicked = !this.nameIsClicked;
    if (name == 'message') this.messageIsClicked = !this.messageIsClicked;
  }

  constructor() { }

  ngOnInit() {
  }

}
