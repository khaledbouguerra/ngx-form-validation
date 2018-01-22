# ngx-form-validation



angular 2 and beyond json powered form validation library


  - Exposes a provider that receives an uri( that return a json form) and returns a complete validated FormGroup
  - Exposes a provider that receives a json form and  returns a complete validated formGroup
 

### Installation
Install ngx-form-validation from npm:
```bash
npm install ngx-form-validation --save
```
### Setup
Set up in your project like this
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormValidationModule} from "ngx-form-validation";
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
```

- ReactiveFormsModule and  HttpClientModule are mandatory

Then you import FormValidationService in your component
```ts
import {FormValidationService} from "ngx-form-validation/lib/service/form-validation.service";
.
.
.
constructor(private formValidationService: FormValidationService) {}
 ```
 
 The following APIs are provided :
 
 Function  | Usage
---       | ---
toFormGroup| `Gets the form validation object as a param and returns a complete instance of FormGroup`
createForm| `Gets the form object from the endpoint (specified by the provided uri) and generates  acomplete FormGroup `
getValidationObject           | ` Gets the form object from the endpoint (specified by the provided uri)`

Here's an example of json powered form

```ts
 let form: any = [
    {
      key: "firstName", value: "khaled", "type": "textarea", validations: {
      required: true,
      minLength: "7",
      maxLength: "8",
      pattern: "",
      custom: "",
      email:false
    }
    },
    {
      key: "psw", value: "", "type": "password", validations: {
      required: true,
      minLength: "7",
      maxLength: "15",
      pattern: "",
      custom: "",
      email:false
    }
    }
  ];

 ```
##[Here you can find a fully working example](https://plnkr.co/edit/gGkHcZMgWsA9qcKX5LjJ?p=preview)
