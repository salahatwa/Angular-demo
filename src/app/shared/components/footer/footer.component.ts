import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  year: string;

  @Input()
  licence: string;

  @Output() data = new EventEmitter<string>();

  model={
    result:''
  }


  constructor() { }

  ngOnInit(): void {
  }

  /**
   *  send data from child to parent
   */
  sendDataToParent(){
    this.data.emit(this.model.result);
  }

}
