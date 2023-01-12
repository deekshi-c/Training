import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthserviceInterceptor } from './auth.service';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';

import { VgControlsModule } from '@videogular/ngx-videogular/controls';

import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';

import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { OverViewComponent } from './over-view/over-view.component';
import { PauseDialogComponent } from './pause-dialog/pause-dialog.component';
import { TestComponent } from './test/test.component';
import { SubmitComponent } from './submit/submit.component';
import { CloseTestComponent } from './close-test/close-test.component';
import { CongratsComponent } from './congrats/congrats.component';
import { TimePipe } from './time.pipe';
import { ProgressScreenComponent } from './progress-screen/progress-screen.component';
import { TestResultComponent } from './test-result/test-result.component';
import { CertificateComponent } from './certificate/certificate.component';
import { PtimePipe } from './ptime.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    MyCourseComponent,
    OverViewComponent,
    PauseDialogComponent,
    TestComponent,
    SubmitComponent,
    CloseTestComponent,
    CongratsComponent,
    TimePipe,
    ProgressScreenComponent,
    TestResultComponent,
    CertificateComponent,
    PtimePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthserviceInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
