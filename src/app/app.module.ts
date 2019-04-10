import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppVersionComponent } from './apps/app-version/app-version.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AppsComponent } from './apps/apps.component';
import { AppRoutingModule } from './app-routing.module';
import { AppsService } from './apps/apps.service';
import { GlobalService } from './global.service';
import { UpdatesComponent } from './allupdates/updates/updates.component';
import { AllupdatesComponent } from './allupdates/allupdates.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppVersionComponent,
    AppsComponent,
    AboutComponent,
    PageNotFoundComponent,
    UpdatesComponent,
    AllupdatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    GlobalService,
    AppsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
