import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userToken = localStorage.getItem("token");

  profilePictureBase64: any;
  getHeaders = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token") });

  constructor(private http: Http) { }

  uploadProfilePicture(selectedProfilePicture) {

    if (selectedProfilePicture.type == "image/jpeg" || selectedProfilePicture.type == "image/png") {
      const formData = new FormData();
      formData.append('file', selectedProfilePicture, selectedProfilePicture.name)
      this.http.post('http://localhost:8080/resources/setProfilePicture/' + localStorage.getItem("currentEmail"), formData, { headers: this.getHeaders }).subscribe(response => {
        console.log(response);
      })
    }
    else
      alert("picture must be png or jpeg")

  }
  getProfilePicture(userEmail) {
    
    return this.http.get('http://localhost:8080/resources/getProfilePicture/' + userEmail, { headers: this.getHeaders })
  }
}
