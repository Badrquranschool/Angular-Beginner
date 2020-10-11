import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HeaderBarComponent } from './barres/header-bar/header-bar.component';
import { FooterBarComponent } from './barres/footer-bar/footer-bar.component';

@NgModule({
  declarations: [
    AppComponent,
      PropertyCardComponent,
      PropertyListComponent,
      HeaderBarComponent,
      FooterBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
