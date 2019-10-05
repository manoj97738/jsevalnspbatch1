import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KapalaComponent, API } from './kapala';
import { AppComponent } from './app.component';
import { MyCustomPipe } from './my.custom.pipe';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomPipe,
    KapalaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
