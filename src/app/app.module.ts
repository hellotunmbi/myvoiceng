import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from "./app.routing";

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { ComplaintsComponent } from './modules/complaints/complaints.component';
import { VoiceComponent } from './views/voice/voice.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ComplaintsComponent,
    VoiceComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
