import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  ws: any;
  nameToSendTo:string;

  constructor(private http: Http) {}

  sendToken(token) {
    let tokenUrl = "http://localhost:8080/resources/users";
    console.log('Bearer ' + token);
    let getHeaders = new Headers({ 'Authorization': 'Bearer ' + token });
    return this.http.get(tokenUrl, { headers: getHeaders });
  }
  
  disconnect() {
    if (this.ws != null) {
      this.ws.ws.close();
    }
  }
  
  sendMessage(message, messages,ws,nameToSendTo) {

    let emiterName=localStorage.getItem("currentEmail")
    let data = JSON.stringify({
      "emitterName":emiterName,
       "message" : message
  
    })
   if(!(nameToSendTo==emiterName)){
    this.showMessage(emiterName,message,messages);
   }
    ws.send("/app/message/"+nameToSendTo, {}, data);
    return messages;
  }
  
  showMessage(nume,message,messages) {
    let messagex={
      'emitterName':nume,
      'message':message,
    }
    messages.push(messagex)
     return messages;
  }
}
