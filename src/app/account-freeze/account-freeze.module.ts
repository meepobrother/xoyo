import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountFreezeComponent } from './account-freeze/account-freeze.component';

@NgModule({
  declarations: [AccountFreezeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AccountFreezeComponent },
    ])
  ]
})
export class AccountFreezeModule { }
