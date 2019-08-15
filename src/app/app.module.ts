import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {HomeComponent} from './home/home.component';
import {TopComponent} from './top/top.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GithubProjectsService} from './services/github-projects.service';
import {HttpClientModule} from '@angular/common/http';
import {InfoComponent} from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TopComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [
    MatToolbarModule,
  ],
  providers: [GithubProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
