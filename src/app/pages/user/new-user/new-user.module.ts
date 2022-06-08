import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewUserComponent } from "./new-user.component"


@NgModule({
  declarations: [NewUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: NewUserComponent
      }
    ])
  ]
})
export class NewUserModule { }
