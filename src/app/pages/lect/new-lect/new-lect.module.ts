import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLectComponent } from "./new-lect.component"
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NewLectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: NewLectComponent
      }
    ])
  ]
})
export class NewLectModule { }
