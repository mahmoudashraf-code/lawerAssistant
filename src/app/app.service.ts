import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  user;
  alert: alert[] = [];
  constructor(public http: HttpClient, public router: Router) { }
  setLogin() {
    if (this.user == undefined) {
      this.router.navigate([""])
      return false;
    } else return true;
  }
}

interface alert {
  header: string,
  body: string,
  error: boolean
}
