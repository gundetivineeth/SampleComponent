import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  serverElements = [{type:"server",name:"test",content:"test content"}];
  onServerCreated(serverData:{name:string,content:string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
   }
   onBluePrintCreated(bluePrintData:{name:string,content:string}){
    this.serverElements.push({
      type: 'BluePrint',
      name: bluePrintData.name,
      content: bluePrintData.content
    });
   }
  
}
