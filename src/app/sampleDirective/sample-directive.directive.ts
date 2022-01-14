import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSampleDirective]'
})
export class SampleDirectiveDirective implements OnInit{

  constructor(private elf:ElementRef) { 

  }
  ngOnInit(): void {
    this.elf.nativeElement.style.backgroundColor = 'red';
  }
  

}
