import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormValidationModule} from "./ngx-form-validation/form-validation.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormValidationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
