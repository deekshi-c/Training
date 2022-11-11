import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WHomeComponent } from './w-home/w-home.component';
import { FavComponent } from './fav/fav.component'
import { RecentComponent } from './recent/recent.component';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    routing,
    HomeComponent,
    WHomeComponent,
    FavComponent,
    RecentComponent,
    DialogComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
