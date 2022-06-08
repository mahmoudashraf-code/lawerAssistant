import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { appRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from "@angular/common/http";
import { AlertComponent } from "./alert/alert.component";
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
