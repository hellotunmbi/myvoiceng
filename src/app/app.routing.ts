import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { VoiceComponent } from './views/voice/voice.component';
import { LoginComponent } from './views/login/login.component';
import { FeedsComponent } from './views/feeds/feeds.component';
import { ProfileComponent } from './views/profile/profile.component';


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
    ,
    {
        path: 'feeds',
        component: FeedsComponent
    }
    ,
    {
        path: 'profile',
        component: ProfileComponent
    }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
 