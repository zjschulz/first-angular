import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'online';
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
