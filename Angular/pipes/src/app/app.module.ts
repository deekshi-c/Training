import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParamComponent } from './param/param.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    routing,
    ParamComponent,
    CustomPipePipe,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
