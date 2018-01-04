import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormElementsModule } from 'xynga-form-elements';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormElementsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
