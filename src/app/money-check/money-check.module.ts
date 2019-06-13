import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoneyCheckComponent } from './money-check/money-check.component';

@NgModule({
  declarations: [MoneyCheckComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MoneyCheckComponent },
    ])
  ]
})
export class MoneyCheckModule { }
