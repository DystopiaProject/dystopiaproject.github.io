import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AppVersionComponent } from "./apps/app-version/app-version.component";
import { AppsComponent } from "./apps/apps.component";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'app', component: AppsComponent, children: [
        { path: ':id', component: AppVersionComponent }
    ]},
    { path: 'about', component: AboutComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule
{
  
}