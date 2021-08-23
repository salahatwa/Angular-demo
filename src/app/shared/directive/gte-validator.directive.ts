import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appGteValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: GteValidatorDirective, multi: true }
  ]
})
export class GteValidatorDirective implements Validator {

  constructor() { }

  validate(control: FormControl): ValidationErrors | null {
    const v = +control.value;

    // console.log(v);
    if (isNaN(v)) {
      return { 'gte': true, 'requiredValue': 10 }
    }

    if (v <= 10) {
      return { 'gte': true, 'requiredValue': 10 }
    }

    return null
  }

}
