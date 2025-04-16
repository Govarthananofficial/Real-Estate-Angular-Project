import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path:"",loadComponent:()=>import("./core/home/home.component").then((t)=>t.HomeComponent)
},
{
    path:"h",loadComponent:()=>import("./core/create/create.component").then((t)=>t.CreateComponent)
}
];
