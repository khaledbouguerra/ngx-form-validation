import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
@Injectable()
export class FormValidationService {

  constructor(private http: HttpClient) { }
  /**
   * gets the form validation object as a param and returns an instance of FormGroup
   * @param form
   * @returns {FormGroup}
   */
  toFormGroup(form:any) {
    let group:any = {};
    let tab:Array<any> = [];

    form.forEach((element:any) => {
      group[element.key] = new FormControl(element.value || '');
      element.validations.required ? tab.push(Validators.required) : '';
      element.validations.minLength ? tab.push(Validators.minLength(element.validations.minLength)) : '';
      element.validations.maxLength ? tab.push(Validators.maxLength(element.validations.maxLength)) : '';
      element.validations.email ? tab.push(Validators.email) : '';
      element.validations.pattern ? tab.push(Validators.pattern(element.validations.pattern)) : '';
      group[element.key].setValidators((Validators.compose(tab)));
      group[element.key].updateValueAndValidity();
    });
    return new FormGroup(group);
  }

  /**
   * gets the form object from the endpoint (specified by the provided uri) and generate the FormGroup by calling toFormGroup function
   * @param {string} uri
   */
  createForm(uri:string) {
    this.getValidationObject(uri)
      .subscribe(result=>{
        this.toFormGroup(result)
      })

  }

  /**
   * gets the form object from the endpoint (specified by the provided uri)
   * @param {string} uri
   * @returns {Observable<Response>}
   */
  getValidationObject(uri:string): Observable<Response> {
    return this.http.get(uri)
      .map((response:Response)=>response)
  }
}
