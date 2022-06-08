import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Alert } from 'src/app/components/alert';
import { watch } from 'watch-object';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  appData;
  searchText;
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
              this.save()
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
  deleteClient(i: number, data) {
    let x = new Alert({
      title: "معلومات هامة",
      body: "هل تريد حذف العميل.",
      type: "warning",
      button: [
        {
          text: "نعم",
          fun: () => {
            i = this.getIdex(i, data)
            this.app.http.delete(`api/clients/${this.app.user.id}/${this.appData[i].id}`).subscribe(
              res => {
                if (i == this.selectdata) this.selectFrist = false;
                this.appData.splice(i, 1);
                this.app.alert.push({
                  header: "العملاء",
                  error: false,
                  body: "تم الحذف بنجاح"
                });
                x.close();
              }, err => {
                this.app.alert.push({
                  header: "العملاء",
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
  save() {
    this.app.http.put(`api/clients/${this.app.user.id}/${this.appData[this.selectdata].id}`, this.appData[this.selectdata]).subscribe(
      res => {
        this.app.alert.push({
          header: "العملاء",
          error: false,
          body: "تم الحفظ بنجاح"
        });
        this.saveVal = false;
      }, err => {
        this.app.alert.push({
          header: "العملاء",
          error: true,
          body: "حدث خطا فى السيرفر اثناء الاضافة."
        })
      }
    )
  }
  getClientsData() {
    this.app.http.get(`api/clients/${this.app.user.id}`).subscribe(
      res => {
        this.appData = res
      }, err => {
        this.app.alert.push({
          header: "العملاء",
          error: true,
          body: "حدث خطا فى السيرفر اثناء الاضافة."
        })
      }
    );
  }
  print() {
    window.print();
  }
}
