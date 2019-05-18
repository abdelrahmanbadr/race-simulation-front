import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorseRacesComponent } from './horse-races/horse-races.component';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { HorseRaceService } from './services/horse-race.service';

@NgModule({
  declarations: [
    AppComponent,
    HorseRacesComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    HttpClientModule
  ],
  providers: [HorseRaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
