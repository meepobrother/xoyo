import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '@xoyo/components';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
];
@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
