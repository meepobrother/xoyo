import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '@xoyo/components';
import { SecurityComponent } from './security/security.component';
import { ProfileComponent } from './profile/profile.component';
import { ChargeComponent } from './charge/charge.component';
import { GameCenterComponent } from './game-center/game-center.component';

import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';


const routes: Routes = [{
  path: '',
  component: LayoutFooterComponent,
  children: [
    {
      path: 'home',
      loadChildren: './home/home.module#HomeModule'
    }, {
      path: 'security',
      component: SecurityComponent
    }, {
      path: 'profile',
      component: ProfileComponent
    }, {
      path: 'charge',
      component: ChargeComponent
    }, {
      path: 'game-center',
      component: GameCenterComponent
    }
  ]
}];

@NgModule({
  declarations: [
    SecurityComponent,
    ProfileComponent,
    ChargeComponent,
    GameCenterComponent,
    LayoutFooterComponent
  ],
  imports: [
    ComponentsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
