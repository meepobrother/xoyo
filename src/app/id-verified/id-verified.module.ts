import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IdVerifiedComponent } from './id-verified/id-verified.component';

@NgModule({
  declarations: [IdVerifiedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: IdVerifiedComponent },
    ])
  ]
})
export class IdVerifiedModule { }
