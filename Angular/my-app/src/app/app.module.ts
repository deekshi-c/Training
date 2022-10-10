import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CitytwoDetailComponent } from './citytwo-detail/citytwo-detail.component';
import { CityoneDetailComponent } from './cityone-detail/cityone-detail.component';
import { KanheOverviewComponent } from './kanhe-overview/kanhe-overview.component';
import { KanheContactComponent } from './kanhe-contact/kanhe-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    CitytwoDetailComponent,
    CityoneDetailComponent,
    KanheOverviewComponent,
    KanheContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
