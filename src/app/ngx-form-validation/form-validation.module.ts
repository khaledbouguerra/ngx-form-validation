import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormValidationService} from "./service/form-validation.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [FormValidationService]
})
export class FormValidationModule { }
