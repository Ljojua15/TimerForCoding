import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleTimerComponent } from './circle-timer/circle-timer.component';
import { SquareTimerComponent } from './square-timer/square-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleTimerComponent,
    SquareTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
