import { Component, OnInit } from '@angular/core';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { MessengerService } from '../../../services/messengerServices/messenger.service';
import { UserServiceService } from '../../../services/userService/user-service.service';


@Component({
  selector: 'user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent implements OnInit {
  ws: any;
  nameToSendTo: string;
  messages: any[] = [];
  message: any;
  userProfilePictureToSendTo: String = null;;
  currentUserProfilePicture: String = null;;
  

  constructor(private route: ActivatedRoute, private messengerService: MessengerService, private userService: UserServiceService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.nameToSendTo = params.get('email');
      this.messages = [];
      this.message = null;
    });
    this.userService.getProfilePicture(this.nameToSendTo).subscribe(res => {
      this.userProfilePictureToSendTo = JSON.parse(JSON.stringify(res))._body;
    });
    this.userService.getProfilePicture(localStorage.getItem("currentEmail")).subscribe(res => {
      this.currentUserProfilePicture = JSON.parse(JSON.stringify(res))._body;
    });
    this.connect();
  }

  connect() {
    let socket = new WebSocket("ws://localhost:8080/greeting");
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({}, function (frame) {
      that.ws.subscribe("/errors", function (message) {
        alert("Error " + message.body);
      });
      that.ws.subscribe("/topic/reply/" + localStorage.getItem("currentEmail"), function (message) {
        that.messages = that.messengerService.showMessage(that.nameToSendTo, message.body, that.messages);

      });

    }, function (error) {
      alert("STOMP error " + error);
    });
  }
  sendMessage() {
    this.messages = this.messengerService.sendMessage(this.message, this.messages, this.ws, this.nameToSendTo);
  }

  profilePicture(emmiterName) {
    if (emmiterName == localStorage.getItem("currentEmail")) {
      return this.currentUserProfilePicture;
    }
    else if (emmiterName == this.nameToSendTo) {
      return this.userProfilePictureToSendTo;
    }
  }

 
}
