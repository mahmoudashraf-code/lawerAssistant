import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(private app: AppService) {
    app.setLogin()
  }
  navigate(url) {
    this.app.router.navigate([url])
  }
}
