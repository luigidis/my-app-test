import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test server';
  userName = 'luigiDis';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() { }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUser() {
    this.userName = ''
  }
}
