import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Alert } from 'src/app/components/alert';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  appData;
  searchText;
  constructor(private app: AppService) {
    if (app.setLogin())
      this.getUsers();
  }
  getUsers() {
    this.app.http.get("api/users").subscribe(
      res => {
        this.appData = res
      }, err => {
        console.log(err);
      }
    )
  }
  saveData(data) {
    this.app.http.put("api/users", data).subscribe(
      res => {
        this.app.alert.push({
          header: "المستخدمين",
          error: false,
          body: "تم الحفظ بنجاح."
        })
      }, err => {
        this.app.alert.push({
          header: "المستخدمين",
          error: true,
          body: "حدث خطا فى السيرفر اثناء الحفظ."
        })
      }
    )
  }
  deleteUser(id) {
    let x = new Alert({
      title: "معلومات هامة",
      body: "do you want to delete",
      type: "warning",
      button: [
        {
          text: "نعم",
          fun: () => {
            x.close();
            this.app.http.delete(`api/users/${id}`).subscribe(
              res => {
                this.getUsers();
                this.app.alert.push({
                  header: "المستخدمين",
                  error: false,
                  body: "تم حذف المستخدم بنجاح."
                })
              }, err => {
                this.app.alert.push({
                  header: "المستخدمين",
                  error: true,
                  body: "حدث خطا فى السيرفر اثناء الحذف."
                })
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
}
