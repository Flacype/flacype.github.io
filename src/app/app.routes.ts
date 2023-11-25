import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CvComponent } from '../components/cv/cv.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'cv', component: CvComponent},
    { path: 'about-me', component: AboutMeComponent},
    { path: '**', redirectTo: 'home' },
];
