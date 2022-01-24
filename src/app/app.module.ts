import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

// Packages Intall For Project
import { FlexLayoutModule } from '@angular/flex-layout';
import { WhoWeAreCComponent } from './who-we-are-c/who-we-are-c.component';
import { HeaderCComponent } from './header-c/header-c.component';
import { FotterCComponent } from './fotter-c/fotter-c.component';
import { DivisionsCComponent } from './divisions-c/divisions-c.component';
import { CareersCComponent } from './careers-c/careers-c.component';
import { ContactUsCComponent } from './contact-us-c/contact-us-c.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WhoWeAreCComponent,
    HeaderCComponent,
    FotterCComponent,
    DivisionsCComponent,
    CareersCComponent,
    ContactUsCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
