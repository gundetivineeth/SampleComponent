import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStandardDirective]'
})
export class StandardDirectiveDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';

  constructor(private elementRef:ElementRef, private render:Renderer2) { }
  
  ngOnInit(): void {
    //this.render.setStyle(this.elementRef.nativeElement,"background-color","blue");
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.render.setStyle(this.elementRef.nativeElement,"background-color","blue");
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.render.setStyle(this.elementRef.nativeElement,"background-color","transparent");
    this.backgroundColor = 'transparent'
  }
}
