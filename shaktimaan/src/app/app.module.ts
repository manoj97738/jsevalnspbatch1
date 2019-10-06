import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KapalaComponent, API } from './kapala';
import { AppComponent } from './app.component';
import { MyCustomPipe } from './my.custom.pipe';
import { DecimalPipe } from '@angular/common';
// form usage
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from "./formErrorComp/formErrorComp.component";
@NgModule({
  declarations: [
    AppComponent,
    MyCustomPipe,
    KapalaComponent,
    FormErrorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
