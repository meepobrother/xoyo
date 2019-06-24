import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ComponentsModule } from '@xoyo/components';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        ComponentsModule,
        RouterModule.forChild([{
            path: '',
            component: ProfileComponent,
            data: {
                title: '个人中心'
            }
        }])
    ],
    declarations: [
        ProfileComponent
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileModule { }
