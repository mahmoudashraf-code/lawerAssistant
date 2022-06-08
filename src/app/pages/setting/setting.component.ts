import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { watch } from 'watch-object'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {
  appData: user;
  constructor(private app: AppService) {
    this.appData = {
      id: "",
      name: "",
      password: "",
      type: ""
    }
    if (app.setLogin()) {
      this.getClientsData();
      watch(app.user, 'id', () => {
        this.getClientsData();
      })
    }
  }
  getClientsData() {
    this.app.http.get(`api/users/${this.app.user.id}`).subscribe(
      (res: user) => {
        this.appData = res;
      }, err => {
        console.log(err);
      }
    )
  }
  SaveSeeting() {
    this.app.http.put("api/users", this.appData).subscribe(
      res => {
        this.app.alert.push({
          header: "الإعدادات",
          error: false,
          body: "تم الحفظ بنجاح."
        })
      }, err => {
        this.app.alert.push({
          header: "الإعدادت",
          error: true,
          body: "حدث خطا فى السيرفر اثناء الحفظ."
        })
      }
    )
  }
}
interface user {
  id: string,
  name: string,
  password: string,
  type: string
}
