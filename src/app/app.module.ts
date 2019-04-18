import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainCardComponent } from './widget/main-card/main-card.component';
import { WeatherCardComponent } from './widget/weather-card/weather-card.component';
import { HotelCardComponent } from './widget/hotel-card/hotel-card.component';
import { RateFilterPipe } from './common/pipes/rate-filter/rate-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    WeatherCardComponent,
    HotelCardComponent,
    RateFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
