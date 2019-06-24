import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountUnfreezeComponent } from './account-unfreeze/account-unfreeze.component';

@NgModule({
  declarations: [AccountUnfreezeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AccountUnfreezeComponent },
    ])
  ]
})
export class AccountUnfreezeModule { }
