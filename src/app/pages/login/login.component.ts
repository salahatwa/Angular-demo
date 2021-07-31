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

}
