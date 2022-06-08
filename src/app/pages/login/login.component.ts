import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public app: AppService) { }

  submit(data: user) {
    this.app.http.post("/login", data).subscribe(
      (res: any) => {
        if (res.err == true) {
          this.app.alert.push({
            header: "تسجيل الدخول",
            error: true,
            body: "اسم المستخدم وكلمة المرور غير صحيحين."
          })
          return;
        };
        this.app.user = res;
        this.app.alert.push({
          header: "تسجيل الدخول",
          error: false,
          body: "تم تسجيل الدخول بنجاح."
        })
        this.app.router.navigateByUrl('home');
      }, err => {
        console.log(err);
      })
  }
}
interface user {
  name: string,
  password: string
}