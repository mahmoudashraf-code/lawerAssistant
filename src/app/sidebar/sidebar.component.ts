import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  usersId;
  constructor(public app: AppService) {
    if (app.user.type == "admin")
      this.getusers();
  }
  getusers() {
    this.app.http.get("api/users").subscribe(
      res => {
        this.usersId = res;
      }, err => {

      }
    )
  }

}
