import { Directive, ElementRef, Input, OnInit, COMPILER_OPTIONS } from '@angular/core';

@Directive({
  selector: '[ngColor]'
})
export class CustomDirective implements OnInit {

  color: []=[];

  @Input()
  set ngColor(value) {
    console.log(value);
    this.color = value;
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    this.color.forEach(color => {
      this.elementRef.nativeElement.classList.add(color);
    });
  

  }
}
