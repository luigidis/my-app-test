import { Component } from "@angular/core";

// Questo decorator @Component riconosce ad Angular che questo non è una classe typescript normale ma un componente
@Component({
  selector: 'app-server',
    templateUrl: './server.component.html',
  
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatu() {
    return this.serverStatus;
  }
}