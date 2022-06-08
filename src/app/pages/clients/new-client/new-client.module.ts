import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewClientComponent } from "./new-client.component"
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NewClientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: NewClientComponent
      }
    ])
  ]
})
export class NewClientModule { }
