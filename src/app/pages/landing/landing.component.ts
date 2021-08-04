import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  colors=['text-success','bg-info'];
  type='BSDS';

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
  constructor() { }

  ngOnInit(): void {
    console.log("INTIALIZATION");
  }

  comingData(result: string) {
    this.dataFromChild = result;
    console.log(result);
  }

}
