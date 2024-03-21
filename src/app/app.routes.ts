import { Routes } from '@angular/router';
import { LightPageComponent } from './components/light-page/light-page.component';

export const routes: Routes = [
    {path: "light", component: LightPageComponent},
    {path: "**", redirectTo: "light"}
];
