import { Component } from "@angular/core";

// Questo decorator @Component riconosce ad Angular che questo non è una classe typescript normale ma un componente
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }
  getServerStatu() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}