import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messengerServices/messenger.service';


@Component({
  selector: 'list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {
  users: any[]
  constructor(private messengerService:MessengerService) { }

 
  ngOnInit() {
    this.messengerService.sendToken(localStorage.getItem("token")).subscribe(data=>{
    this.users=data.json()
    })
  }

}
