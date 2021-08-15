import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { ContactForm } from './contact.form.model';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  countryList = [{ id: 1, name: 'JORDAN' }, { id: 2, name: 'Egypt' }];
  contactModel: ContactForm={
    firstname:'Mohamed'
  };

  onSumbit(form) {
    console.log(form.value);
    console.log(form.valid);
    console.log(this.contactModel);
  }



  colors = ['text-success', 'bg-info'];

  date = new Date();
  num = 11.2323333;
  text = 'sample title lower case';

  url: String;

  colorVal = 'text-success';


  type = 'BSDS';

  customers = [{
    name: 'Ahmed',
    age: 10
  }, {
    name: 'mohamed',
    age: 20
  }, {
    name: 'kjln',
    age: 11
  }];

  model = {
    year: '2021'
  }


  dataFromChild: string;

  constructor() {
    // let contact:ContactForm={
    //   age:0,
    //   gender:'M'
    // }

    // console.log(contact.);
    // /sole.log("INTIALIZATION"+contact.firstName);
  }

  ngOnInit(): void {
    console.log("INTIALIZATION");
    this.url = window.location.origin;
    localStorage
  }

  ngOnDestroy(): void {

  }

  ngOnChanges(): void {

  }

  ngAfterViewInit(): void {

  }

  comingData(result: string) {
    this.dataFromChild = result;
    console.log(result);
  }


  arr1 = [
    { id: 1, name: 'ahmed', age: 10 },
    { id: 2, name: 'mohamed', age: 10 },
    { id: 3, name: 'wael', age: 20 },
  ]



  replace() {
    this.arr1 = [
      { id: 1, name: 'ahmed', age: 10 },
      { id: 2, name: 'mohamed', age: 10 },
      { id: 3, name: 'wael', age: 30 },
    ]
  }

  identity(index, item) {

    return item.id;
  }

}
