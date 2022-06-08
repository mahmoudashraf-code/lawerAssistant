import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sideBar: boolean = false;
  constructor(public app: AppService) {

  }
  ngOnInit() {
    document.getElementById("sectionId").addEventListener('click', () => {
      this.sideBar = false;
    });
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }
}
