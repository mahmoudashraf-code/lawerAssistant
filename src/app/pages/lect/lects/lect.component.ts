import { Component } from '@angular/core';
import { async } from 'rxjs/internal/scheduler/async';
import { AppService } from 'src/app/app.service';
import { Alert } from 'src/app/components/alert';
import { watch } from 'watch-object'

@Component({
  selector: 'app-lect',
  templateUrl: './lect.component.html',
  styleUrls: ['./lect.component.scss']
})
export class LectComponent {
  appData;
  searchText;
  sortText = 'normal';
  saveVal: boolean = false;
  selectFrist: boolean = false;
  selectdata: number = -1;
  constructor(public app: AppService) {
    if (app.setLogin()) {
      this.getClientsData();
      watch(app.user, 'id', () => {
        if (this.selectFrist == true) this.selectFrist = false;
        this.getClientsData();
      })
    }
  }
  getIdex(index: number, data): number {
    data = JSON.stringify(data);
    if (JSON.stringify(this.appData[index]) == data) return index;
    for (let i = 0; i < this.appData.length; i++) {
      if (JSON.stringify(this.appData[i]) == data) {
        return i;
      }
    }
  }
  svaeToAr() {
    this.appData[this.selectdata].save = !this.appData[this.selectdata].save;
    this.saveData();
    this.getClientsData()
    this.selectFrist = false;
    this.selectdata = -1;
  }
  print() {
    window.print()
  }
  updateData(i: number, data) {
    i = this.getIdex(i, data);
    if (this.selectFrist == false) {
      this.selectFrist = true;
      this.selectdata = i;
    } else {
      if (i == this.selectdata) return;
      if (this.saveVal == false) {
        this.selectdata = i;
        return;
      }
      let x = new Alert({
        title: "معلومات هامة",
        body: "حدث تغير فى البيانات هل تريد الحفظ.",
        type: "info",
        button: [
          {
            text: "نعم",
            fun: () => {
              this.saveData()
              this.selectdata = i;
              x.close();
            }
          },
          {
            text: "لا",
            fun: () => {
              this.getClientsData();
              this.selectdata = i;
              x.close();
            }
          },
          {
            text: "الغاء",
            fun: () => {
              x.close();
            }
          }
        ],
        dir: "rtl",
        width: "270px",
        height: "130px"
      });
    }
  }
  cancel() {
    this.selectFrist = false;
    this.getClientsData();
  }
  deleteLect(i: number, data) {
    let x = new Alert({
      title: "معلومات هامة",
      body: "هل تريد حذف الجلسة.",
      type: "warning",
      button: [
        {
          text: "نعم",
          fun: () => {
            i = this.getIdex(i, data)
            this.app.http.delete(`api/lects/${this.app.user.id}/${this.appData[i].clientId}/${this.appData[i].id}`).subscribe(
              res => {
                if (i == this.selectdata) this.selectFrist = false;
                this.app.alert.push({
                  header: "الدعوى",
                  error: false,
                  body: "تم الحذف بنجاح"
                });
                this.getClientsData()
                x.close();
              }, err => {
                this.app.alert.push({
                  header: "الدعوى",
                  error: true,
                  body: "حدث خطا فى السيرفر اثناء الاضافة."
                })
                x.close();
              }
            )
          }
        },
        {
          text: "لا",
          fun: () => {
            x.close();
          }
        }
      ],
      dir: "rtl",
      width: "270px",
      height: "130px"
    });
  }
  getClientsData() {
    this.app.http.get(`api/lects/${this.app.user.id}`).subscribe(
      res => {
        this.appData = res
      }, err => {

      }
    );
  }
  saveData() {
    this.app.http.put(`api/lects/${this.app.user.id}/${this.appData[this.selectdata].clientId}/${this.appData[this.selectdata].id}`, this.appData[this.selectdata]).subscribe(
      res => {
        this.app.alert.push({
          header: "الدعوى",
          error: false,
          body: "تم الحفظ بنجاح"
        });
        this.saveVal = false;
      }, err => {
        this.app.alert.push({
          header: "الدعوى",
          error: true,
          body: "حدث خطا فى السيرفر اثناء الاضافة."
        })
      }
    )
  }
}
