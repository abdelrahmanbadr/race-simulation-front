import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorseRacesComponent } from './horse-races/horse-races.component';

@NgModule({
  declarations: [
    AppComponent,
    HorseRacesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
