import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', <- this means a tag which contains this attribute
  // selector: '.app-servers' <- this means a tag which contains this class
  selector: 'app-servers',    // <- Our defined tag
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
