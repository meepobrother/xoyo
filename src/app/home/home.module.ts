import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '@xoyo/components';

@NgModule({
    imports: [
        ComponentsModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
