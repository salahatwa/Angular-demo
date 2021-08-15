import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../landing/contact.form.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  countryList = [{ id: 1, name: 'JORDAN' }, { id: 2, name: 'Egypt' }];

  constructor() { }

  ngOnInit(): void {
  }

  contactModel: ContactForm = {
    firstname: 'Mohamed',
    address:{}
  };

  onSumbit(form) {
    console.log(form.value);
    console.log(form.valid);
    console.log(this.contactModel);
  }

}
