import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HeadOneComponent } from './head-one/head-one.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { IconHeaderComponent } from './icon-header/icon-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SupAdminComponent } from './sup-admin/sup-admin.component';
import { AdminComponent } from './admin/admin.component';
import { AcceptComponent } from './accept/accept.component';
import { ThankComponent } from './thank/thank.component';
@NgModule({
  declarations: [
    AppComponent,
    routing,
    HeadOneComponent,
    ForgotComponent,
    ChangePasswordComponent,
    HomeComponent,
    IconHeaderComponent,
    SupAdminComponent,
    AdminComponent,
    AcceptComponent,
    ThankComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
