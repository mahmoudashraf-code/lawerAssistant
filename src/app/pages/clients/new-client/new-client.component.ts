import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent {
  constructor(public app: AppService) {
    app.setLogin()
  }

  insertNewPeople(data) {
    if (data.name == "") {
      this.app.alert.push({
        header: "إضافة عميل",
        error: true,
        body: "اسم العميل مطلوب."
      });
      return;
    }
    this.app.http.post(`api/clients/${this.app.user.id}`, data).subscribe(
      res => {
        this.app.alert.push({
          header: "إضافة عميل",
          error: false,
          body: "تم الاضافة بنجاح."
        })
      }, err => {
        this.app.alert.push({
          header: "إضافة عميل",
          error: true,
          body: "حدث خطا فى السيرفر اثناء الاضافة."
        })
      }
    );
  }
}
