import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';
export declare class FormValidationService {
    private http;
    constructor(http: HttpClient);
    /**
     * gets the form validation object as a param and returns an instance of FormGroup
     * @param form
     * @returns {FormGroup}
     */
    toFormGroup(form: any): FormGroup;
    /**
     * gets the form object from the endpoint (specified by the provided uri) and generate the FormGroup by calling toFormGroup function
     * @param {string} uri
     */
    createForm(uri: string): void;
    /**
     * gets the form object from the endpoint (specified by the provided uri)
     * @param {string} uri
     * @returns {Observable<Response>}
     */
    getValidationObject(uri: string): Observable<Response>;
}
