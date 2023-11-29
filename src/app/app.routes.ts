import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CvComponent } from '../components/cv/cv.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { GameOfLifeComponent } from '../components/game-of-life/game-of-life.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'cv', component: CvComponent},
    { path: 'about-me', component: AboutMeComponent},
    { path: 'gol', component: GameOfLifeComponent},
    { path: '**', redirectTo: 'home' },
];
