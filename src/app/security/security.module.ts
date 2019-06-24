import { NgModule } from '@angular/core';
import { SecurityComponent } from './security.component';
import { ComponentsModule } from '@xoyo/components';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
    { path: '', component: SecurityComponent },
];
@NgModule({
    imports: [
        ComponentsModule,
        RouterModule.forChild(appRoutes)
    ],
    declarations: [
        SecurityComponent
    ]
})
export class SecurityModule { }
