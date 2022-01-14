import { Component, OnInit, Input, SimpleChanges, OnChanges, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges, AfterContentInit {

  @Input() element= {type:'',name:'',content:''};
  @ContentChild("contentRef",{ static:true}) contentRef:ElementRef;

  constructor() { }

  ngAfterContentInit(): void {
    console.log("In ngAfterContentInit of ServerElementComponent");
    console.log("ngAfterContentInit of ServerElementComponent "+ this.contentRef.nativeElement.textContent);
  }

  ngOnInit(): void {
    console.log("In ngOnInt of ServerElementComponent");
    console.log("ngOnInt of ServerElementComponent "+ this.contentRef.nativeElement.textContent);
  }

  
  ngOnChanges(change: SimpleChanges){
    console.log("In ngOnchanges")
    console.log(change);
  }
}
