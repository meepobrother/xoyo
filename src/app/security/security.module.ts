import { NgModule } from '@angular/core';
import { SecurityComponent } from './security.component';
import { ComponentsModule } from '@xoyo/components';

@NgModule({
    imports: [
        ComponentsModule
    ],
    declarations: [
        SecurityComponent
    ]
})
export class SecurityModule { }
