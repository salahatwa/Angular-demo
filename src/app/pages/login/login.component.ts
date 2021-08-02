import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = "Tile one";
  num = 0;

  disable = false;

  fontSize = '24px';

  formModel = {
    userEmail: '',
    password: ''
  }



  constructor() { }

  ngOnInit(): void {
  }


  model={
    num1:0,
    num2:0
  }

  result;

  sum():number{
    this.result=this.model.num1+this.model.num2;
    return this.result;
  }

  sum2():void{
    console.log('>>>>>>>>>>>>');

  }

}
