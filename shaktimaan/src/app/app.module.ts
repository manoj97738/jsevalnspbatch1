import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KapalaComponent } from './kapala.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    KapalaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
