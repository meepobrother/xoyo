import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoneyRecordsComponent } from './money-records/money-records.component';

@NgModule({
  declarations: [MoneyRecordsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MoneyRecordsComponent },
    ])
  ]
})
export class MoneyRecordsModule { }
