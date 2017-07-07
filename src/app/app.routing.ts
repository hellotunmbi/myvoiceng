import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
 