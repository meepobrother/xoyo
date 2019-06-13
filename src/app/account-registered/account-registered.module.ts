import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountRegisteredComponent } from './account-registered/account-registered.component';

@NgModule({
  declarations: [AccountRegisteredComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AccountRegisteredComponent },
    ])
  ]
})
export class AccountRegisteredModule { }
