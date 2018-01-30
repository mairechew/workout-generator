import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimeSliderComponent } from './time-slider/time-slider.component';
import { LogoBoxComponent } from './logo-box/logo-box.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeSliderComponent,
    LogoBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
