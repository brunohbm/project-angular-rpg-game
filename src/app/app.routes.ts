import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LumenhorneForestComponent } from './features/lumenhorne-forest/lumenhorne-forest.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lumenhorne', component: LumenhorneForestComponent },
];
