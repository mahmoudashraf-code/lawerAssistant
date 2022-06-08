import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  client;
  dataChat = []
  constructor(private app: AppService) {
    app.setLogin()
    //this.createConnection();
  }
  createConnection() {
    this.client = (<any>window).require('net').connect(3000, 'localhost', () => {
      this.client.write(JSON.stringify({
        type: "info",
        name: "mahmoud ashraf",
        id: 123544223325
      }));
    });
    this.client.on('end', () => {
      console.log('disconnected from server');
    });
    this.client.on('data', (data) => {
      data = JSON.parse(data);
      if (data.type == 'users') {
        console.log(data.data)
      } else {
        this.dataChat.push({
          user: 'y',
          name: "mahmoud ashraf",
          idclient: "",
          data: data.toString()
        });
      }
    });
    this.client.on('error', (err) => {
      if (this.client.connecting == false)
        console.log("server close")
      console.log(err);
    });
  }
  postData(data) {
    this.dataChat.push({
      type: "mess",
      user: 'i',
      name: "mahmoud ashraf",
      idclient: "",
      data: data
    });
    //this.client.write(data);
  }
  ngOnDestroy() {
    //this.client.end();
  }
}
