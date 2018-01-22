"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var form_validation_service_1 = require("./service/form-validation.service");
var FormValidationModule = (function () {
    function FormValidationModule() {
    }
    FormValidationModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [],
                    providers: [form_validation_service_1.FormValidationService]
                },] },
    ];
    /** @nocollapse */
    FormValidationModule.ctorParameters = function () { return []; };
    return FormValidationModule;
}());
exports.FormValidationModule = FormValidationModule;
//# sourceMappingURL=form-validation.module.js.map