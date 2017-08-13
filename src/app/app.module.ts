import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRouting } from "./app.routing";

import { AuthService } from "./services/auth.service";
import { ComplaintsService } from "./services/complaints.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { ComplaintsComponent } from './modules/complaints/complaints.component';
import { VoiceComponent } from './views/voice/voice.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { FeedsComponent } from './views/feeds/feeds.component';
import { RantComponent } from './modules/rant/rant.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ComplaintsComponent,
    VoiceComponent,
    LoginComponent,
    ProfileComponent,
    FeedsComponent,
    RantComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRouting,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-voice-ng'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    Angular2TokenService, 
    AuthService,
    ComplaintsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
