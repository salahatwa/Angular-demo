import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContactForm } from '../../shared/models/contact.form.model';
import { gte } from './../../shared/utils/custome-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  countryList = [{ id: 1, name: 'JORDAN' }, { id: 2, name: 'Egypt' }];

  contactModel: ContactForm = {
    firstname: 'Mohamed',
    lastname: 'samm',
    country: 2,
    address: {
      city: 'Cairo'
    }
  };

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //Load cutomer detials

    this.initForm(this.contactModel);
  }


  initForm(contactModel: ContactForm) {
    // this.contactForm = new FormGroup(
    //   {
    //     firstname: new FormControl(contactModel.firstname),
    //     lastname: new FormControl(contactModel.lastname),
    //     email: new FormControl(contactModel.email),
    //     gender: new FormControl(contactModel.gender),
    //     isMarried: new FormControl(contactModel.isMarried),
    //     country: new FormControl(contactModel.country)
    //   }
    // );

    this.contactForm = this.fb.group(
      {
        firstname: new FormControl(contactModel.firstname, [Validators.required]),
        lastname: new FormControl(contactModel.lastname),
        age: new FormControl(contactModel.age,[Validators.required,gte]),
        email: new FormControl(contactModel.email),
        gender: new FormControl(contactModel.gender),
        isMarried: new FormControl(contactModel.isMarried),
        country: new FormControl(contactModel.country),
        address: this.fb.group({
          city: new FormControl(contactModel.address.city),
          street: new FormControl(contactModel.address.street),
          pincode: new FormControl(contactModel.address.pincode),
        })
      }
    );
  }

  onSumbit(form) {
    console.log(form.value);
    console.log(form.valid);
    // this.contactForm.controls[]
  }

  reset() {
    this.contactForm.reset();
  }

  field(field) {
    return this.contactForm.get(field);
  }

}
