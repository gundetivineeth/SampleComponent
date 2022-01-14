import { Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated 
})
export class CockpitComponent implements OnInit, OnChanges{
  ngOnInit(): void {
    console.log("In ngInit");
  }
  
  @Output() serverCreated = new EventEmitter<{name:string,content:string}>();
  @Output() bluePrintCreated = new EventEmitter<{name:string,content:string}>();
  @ViewChild("refServerName") refServerName:ElementRef;

  serverName='';
  serverContent = '';

  ngOnChanges(change: SimpleChanges){
    console.log("In ngOnchanges")
    console.log("changes "+ change);
  }

 addServer(){
  this.serverCreated.emit({
    name: this.refServerName.nativeElement.value,
    content: this.serverContent
  });
 }
 addBluePrintServer(){
  this.bluePrintCreated.emit({
    name: this.refServerName.nativeElement.value,
    content: this.serverContent
  });
 }
}
