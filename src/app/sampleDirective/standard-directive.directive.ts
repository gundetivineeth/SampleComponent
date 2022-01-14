import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStandardDirective]'
})
export class StandardDirectiveDirective implements OnInit{

  constructor(private elementRef:ElementRef, private render:Renderer2) { }
  ngOnInit(): void {
    this.render.setStyle(this.elementRef.nativeElement,"background-color","blue");
  }

}
