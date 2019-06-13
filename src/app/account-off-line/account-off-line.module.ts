import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountOffLineComponent } from './account-off-line/account-off-line.component';

@NgModule({
  declarations: [AccountOffLineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AccountOffLineComponent },
    ])
  ]
})
export class AccountOffLineModule { }
