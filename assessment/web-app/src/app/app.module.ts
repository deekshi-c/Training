import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WHomeComponent } from './w-home/w-home.component';
import { FavComponent } from './fav/fav.component';
import { DialogComponent } from './dialog/dialog.component';
import { RecentComponent } from './recent/recent.component';
@NgModule({
  declarations: [
    AppComponent,
    routing,
    HomeComponent,
    WHomeComponent,
    FavComponent,
    DialogComponent,
    RecentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
