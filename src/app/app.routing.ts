import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { VoiceComponent } from "./views/voice/voice.component";
import { LoginComponent } from "./views/login/login.component";


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'voice',
        component: VoiceComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
 