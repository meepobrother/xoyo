import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdatePasswordComponent } from './update-password/update-password.component';

@NgModule({
  declarations: [UpdatePasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UpdatePasswordComponent },
    ])
  ]
})
export class UpdatePasswordModule { }
