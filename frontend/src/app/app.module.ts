import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { CenterImageComponent } from './center-image/center-image.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { MiddlepagesectionComponent } from './middlepagesection/middlepagesection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { MessengerComponent } from './user/messenger/messenger.component';
import { UserComponent } from './user/user.component';
import { NavBarElementComponent } from './nav-bar/nav-bar-element/nav-bar-element.component';
import { ListOfUsersComponent } from './user/messenger/list-of-users/list-of-users.component';
import { OneMessageComponent } from './user/messenger/user-chat/one-message/one-message.component';
import { MessengerUserComponent } from './user/messenger/list-of-users/messenger-user/messenger-user.component';
import { UserChatComponent } from './user/messenger/user-chat/user-chat.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { UserDetailsComponent } from './user/user-page/user-details/user-details.component';
import { UserProfilePictureComponent } from './user/user-page/user-profile-picture/user-profile-picture.component';



@NgModule({
  declarations: [
    AppComponent,
    CenterImageComponent,
    NavBarComponent,
    MiddlepagesectionComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MessengerComponent,
    UserComponent,
    NavBarElementComponent,
    ListOfUsersComponent,
    OneMessageComponent,
    MessengerUserComponent,
    UserChatComponent,
    UserPageComponent,
    UserDetailsComponent,
    UserProfilePictureComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "contact", component: ContactComponent },
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupComponent },
      {
        path: "user", component: UserComponent, children: [
           {path:"",redirectTo: 'user-page', pathMatch: 'full' },
            {path: "messenger", component: MessengerComponent, children: [
              { path: ":email", component: UserChatComponent }
            ]
          },
          { path: "user-page", component: UserPageComponent }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
