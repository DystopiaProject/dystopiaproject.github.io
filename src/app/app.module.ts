import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppVersionComponent } from './apps/app-version/app-version.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AppsComponent } from './apps/apps.component';
import { AppRoutingModule } from './app-routing.module';
import { AppsService } from './apps/apps.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppVersionComponent,
    AppsComponent,
    AboutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
