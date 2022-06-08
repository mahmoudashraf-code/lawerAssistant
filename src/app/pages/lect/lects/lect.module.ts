import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LectComponent } from './lect.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [LectComponent, SortPipe],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      {
        path: '',
        component: LectComponent
      }
    ])
  ]
})
export class LectModule { }
