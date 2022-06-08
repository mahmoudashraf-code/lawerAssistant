import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-new-lect',
  templateUrl: './new-lect.component.html',
  styleUrls: ['./new-lect.component.scss']
})
export class NewLectComponent {
  appData;
  constructor(private app: AppService) {
    if (app.setLogin())
      app.http.get(`api/clients/${app.user.id}/people`).subscribe(
        res => {
          this.appData = res;
        },
        err => {
          this.app.alert.push({
            header: "إضافة دعوى",
            error: true,
            body: "حدث خطا فى السيرفر اثناء جلب البيانات."
          })
        }
      )
  }
  insertNewLect(data, i) {
    if (data.number == "" || data.poistion == "" || data.circle == "" || i == "") {
      this.app.alert.push({
        header: "إضافة دعوى",
        error: true,
        body: "بعض البيانات مفقودة."
      })      
      return;
    }
    this.app.http.post(`api/lects/${this.app.user.id}/${i}`, data).subscribe(
      res => {
        this.app.alert.push({
          header: "إضافة دعوى",
          error: false,
          body: "تم الاضافة بنجاح."
        })
      }, err => {
        this.app.alert.push({
          header: "إضافة دعوى",
          error: true,
          body: "حدث خطا فى السيرفر اثناء الاضافة."
        })
      }
    );
  }
}
