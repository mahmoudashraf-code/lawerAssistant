import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleryComponent } from './salery.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [SaleryComponent],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      {
        path: '',
        component: SaleryComponent
      },
    ])
  ]
})
export class SaleryModule { }
