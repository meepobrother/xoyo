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
      loadChildren: './home/home.module#HomeModule',
      data: {
        title: '',
        tabBar: true,
      }
    }, {
      path: 'security',
      component: SecurityComponent,
      data: {
        title: '安全中心',
        tabBar: true,
      }
    }, {
      path: 'profile',
      component: ProfileComponent,
      data: {
        title: '个人中心',
        tabBar: true,
      }
    }, {
      path: 'charge',
      component: ChargeComponent,
      data: {
        title: '充值',
        tabBar: true,
      }
    }, {
      path: 'game-center',
      component: GameCenterComponent,
      data: {
        title: '游戏中心',
        tabBar: true,
      }
    },
  ]
}, {

  path: 'common',
  component: LayoutHeaderComponent,
  children: [{
    path: 'update-password',
    loadChildren: './update-password/update-password.module#UpdatePasswordModule',
    data: {
      title: '修改密码',
    }
  }, {
    path: 'account-freeze',
    loadChildren: './account-freeze/account-freeze.module#AccountFreezeModule',
    data: {
      title: '账号冻结',
    }
  }, {
    path: 'account-unfreeze',
    loadChildren: './account-unfreeze/account-unfreeze.module#AccountUnfreezeModule',
    data: {
      title: '账号解冻',
    }
  }, {
    path: 'account-off-line',
    loadChildren: './account-off-line/account-off-line.module#AccountOffLineModule',
    data: {
      title: '踢号下线',
    }
  }, {
    path: 'account-registered',
    loadChildren: './account-registered/account-registered.module#AccountRegisteredModule',
    data: {
      title: '注册账号',
    }
  }, {
    path: 'money-check',
    loadChildren: './money-check/money-check.module#MoneyCheckModule',
    data: {
      title: '余额查询',
    }
  }, {
    path: 'money-records',
    loadChildren: './money-records/money-records.module#MoneyRecordsModule',
    data: {
      title: '充值记录',
    }
  }, {
    path: 'id-verified',
    loadChildren: './id-verified/id-verified.module#IdVerifiedModule',
    data: {
      title: '实名认证',
    }
  }]
}, {
  path: 'default',
  component: LayoutDefaultComponent,
  children: []
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
