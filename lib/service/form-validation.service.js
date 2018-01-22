"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
require("rxjs/Rx");
var FormValidationService = (function () {
    function FormValidationService(http) {
        this.http = http;
    }
    /**
     * gets the form validation object as a param and returns an instance of FormGroup
     * @param form
     * @returns {FormGroup}
     */
    /**
       * gets the form validation object as a param and returns an instance of FormGroup
       * @param form
       * @returns {FormGroup}
       */
    FormValidationService.prototype.toFormGroup = /**
       * gets the form validation object as a param and returns an instance of FormGroup
       * @param form
       * @returns {FormGroup}
       */
    function (form) {
        var group = {};
        var tab = [];
        form.forEach(function (element) {
            group[element.key] = new forms_1.FormControl(element.value || '');
            element.validations.required ? tab.push(forms_1.Validators.required) : '';
            element.validations.minLength ? tab.push(forms_1.Validators.minLength(element.validations.minLength)) : '';
            element.validations.maxLength ? tab.push(forms_1.Validators.maxLength(element.validations.maxLength)) : '';
            element.validations.email ? tab.push(forms_1.Validators.email) : '';
            element.validations.pattern ? tab.push(forms_1.Validators.pattern(element.validations.pattern)) : '';
            group[element.key].setValidators((forms_1.Validators.compose(tab)));
            group[element.key].updateValueAndValidity();
        });
        return new forms_1.FormGroup(group);
    };
    /**
     * gets the form object from the endpoint (specified by the provided uri) and generate the FormGroup by calling toFormGroup function
     * @param {string} uri
     */
    /**
       * gets the form object from the endpoint (specified by the provided uri) and generate the FormGroup by calling toFormGroup function
       * @param {string} uri
       */
    FormValidationService.prototype.createForm = /**
       * gets the form object from the endpoint (specified by the provided uri) and generate the FormGroup by calling toFormGroup function
       * @param {string} uri
       */
    function (uri) {
        var _this = this;
        this.getValidationObject(uri)
            .subscribe(function (result) {
            _this.toFormGroup(result);
        });
    };
    /**
     * gets the form object from the endpoint (specified by the provided uri)
     * @param {string} uri
     * @returns {Observable<Response>}
     */
    /**
       * gets the form object from the endpoint (specified by the provided uri)
       * @param {string} uri
       * @returns {Observable<Response>}
       */
    FormValidationService.prototype.getValidationObject = /**
       * gets the form object from the endpoint (specified by the provided uri)
       * @param {string} uri
       * @returns {Observable<Response>}
       */
    function (uri) {
        return this.http.get(uri)
            .map(function (response) { return response; });
    };
    FormValidationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    FormValidationService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
    ]; };
    return FormValidationService;
}());
exports.FormValidationService = FormValidationService;
//# sourceMappingURL=form-validation.service.js.map