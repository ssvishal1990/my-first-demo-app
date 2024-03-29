import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', <- this means a tag which contains this attribute
  // selector: '.app-servers' <- this means a tag which contains this class
  selector: 'app-servers',    // <- Our defined tag
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  alllowNewServer = false;
  allowClearUserName = false;
  serverCreated = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'TestServer';
  servers = ['TestServer', 'TestServer2'];
  userName = '';
  constructor() {
    setTimeout(() => {
      this.alllowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus ='Server was created and server Name is ' + this.serverName
  }

  OnUpdateServerName(event: any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  enableClearButton(){
    this.allowClearUserName = true;
  }

  clearUserName(){
    this.userName = '';
    this.allowClearUserName = false;
  }

}
