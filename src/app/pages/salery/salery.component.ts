import { Component, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { watch } from 'watch-object'

@Component({
  selector: 'app-salery',
  templateUrl: './salery.component.html',
  styleUrls: ['./salery.component.scss']
})
export class SaleryComponent implements OnDestroy {
  appData;
  searchText;
  users;
  constructor(private app: AppService) {
    if (app.setLogin()) {
      this.getSaleyData();
      this.getUsers()
      watch(app.user, 'id', () => {
        this.getSaleyData();
      })
    }
  }
  getUsers() {
    this.app.http.get(`api/clients/${this.app.user.id}/people`).subscribe(
      res => {
        this.users = res;
      },
      err => {
        this.app.alert.push({
          header: "الحسابات",
          error: true,
          body: "حدث خطا فى السيرفر اثناء جلب البيانات."
        })
      }
    )
  }
  getSaleyData() {
    this.app.http.get(`api/salery/${this.app.user.id}`).subscribe(
      res => {
        this.appData = res;
      }, err => {
        this.app.alert.push({
          header: "الحسابات",
          error: true,
          body: "حدث خطا فى السيرفر اثناء الحفظ."
        })
      }
    );
  }
  ngOnDestroy() {
    this.save()
  }
  save() {
    if (this.app.user == undefined) return;
    this.app.http.post(`api/salery/${this.app.user.id}`, this.appData).subscribe(
      res => {
        this.app.alert.push({
          header: "الحسابات",
          error: false,
          body: "تم الحفظ بنجاح."
        })
      }, err => {
        this.app.alert.push({
          header: "الحسابات",
          error: true,
          body: "حدث خطا فى السيرفر اثناء الحفظ."
        })
      }
    );
  }
  toggle(ele) {
    if (ele.style.display == "none") {
      ele.style.display = "block"
    } else ele.style.display = "none"
  }
  home() {
    this.app.router.navigate(['/home'])
  }
}
