import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  model = {
    year: '2021'
  }


  dataFromChild: string;
  constructor() { }

  ngOnInit(): void {
  }

  comingData(result: string) {
    this.dataFromChild = result;
    console.log(result);
  }

}
