import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactForm } from '../../shared/models/contact.form.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('contactForm') contactForm:NgForm;

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

  reset(){
    this.contactForm.reset();
  }

}
