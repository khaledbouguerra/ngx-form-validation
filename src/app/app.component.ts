import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormValidationService} from "./ngx-form-validation/service/form-validation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm: FormGroup;
  validation: any = [
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

  constructor(private formValidationService: FormValidationService) {
  }

  ngOnInit() {
    this.userForm = this.formValidationService.toFormGroup(this.validation);
  }

  submitFrom({valid, value}): void {
    console.log(`form values ${value} validity ${valid}`);
    console.log('this is the value', this.userForm.get('firstName').value);
    console.log('this is the password value', this.userForm.get('psw').value);

  }
}
