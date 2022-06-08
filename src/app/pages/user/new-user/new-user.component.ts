import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  constructor(private app: AppService) {
    app.setLogin()
  }
  insertNewUser(data) {
    this.app.http.post("api/users", data).subscribe(
      res => {
        this.app.alert.push({
          header: "إضافة مستخدم جديد",
          error: false,
          body: "تم الاضافة بنجاح."
        })
      }, err => {
        this.app.alert.push({
          header: "إضافة مستخدم جديد",
          error: true,
          body: "حدث خطا فى السيرفر اثناء الحفظ."
        })
      }
    )
  }
}
