import { Component, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { watch } from 'watch-object'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnDestroy {
  appData;
  searchText;
  constructor(public app: AppService) {
    if (app.setLogin()) {
      this.getClientsData();
      watch(app.user, 'id', () => {
        this.getClientsData();
      })
    }
  }
  getClientsData() {
    this.app.http.get(`api/notes/${this.app.user.id}`).subscribe(
      res => {
        this.appData = res
      }, err => {
        this.app.alert.push({
          header: "تسجيل ملاحظات",
          error: true,
          body: "حدث خطا فى السيرفر اثناء جلب البيانات."
        })
      }
    );
  }
  ngOnDestroy() {
    if (this.app.user == undefined) return;
    this.app.http.post(`api/notes/${this.app.user.id}`, this.appData).subscribe(
      res => {
        this.app.alert.push({
          header: "تسجيل ملاحظات",
          error: false,
          body: "تم الحفظ بنجاح."
        })
      }, err => {
        this.app.alert.push({
          header: "تسجيل ملاحظات",
          error: true,
          body: "حدث خطا فى السيرفر اثناء الحفظ."
        })
      }
    );
  }
}
