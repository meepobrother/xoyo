import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '@xoyo/components';
import { ChargeComponent } from './charge/charge.component';
import { GameCenterComponent } from './game-center/game-center.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccountFreezeComponent } from './account-freeze/account-freeze/account-freeze.component';
import { AccountUnfreezeComponent } from './account-unfreeze/account-unfreeze/account-unfreeze.component';
import { KickComponent } from './kick/kick.component';
import { IdentityAuthComponent } from './identity-auth/identity-auth.component';
import { BalanceComponent } from './balance/balance.component';
import { ChargeRecordComponent } from './charge-record/charge-record.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutHeaderComponent,
    children: [{
      path: 'login',
      component: LoginComponent,
      data: {
        title: '登录'
      }
    }, {
      path: 'register',
      component: RegisterComponent,
      data: {
        title: '注册'
      }
    }, {
      path: 'forget',
      component: ForgetComponent,
      data: {
        title: '忘记密码'
      }
    }, {
      path: 'change-password',
      component: ChangePasswordComponent
    }, {
      path: 'account-freeze',
      loadChildren: './account-freeze/account-freeze.module#AccountFreezeModule'
    }, {
      path: 'account-unfreeze',
      loadChildren: './account-unfreeze/account-unfreeze.module#AccountUnfreezeModule'
    }, {
      path: 'kick',
      component: KickComponent
    }, {
      path: 'change-password',
      component: ChangePasswordComponent
    }, {
      path: 'identity-auth',
      component: IdentityAuthComponent
    }, {
      path: 'balance',
      component: BalanceComponent
    }, {
      path: 'charge-record',
      component: ChargeRecordComponent
    }]
  },
  {
    path: '',
    component: LayoutFooterComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        data: {
          title: ''
        }
      }, {
        path: 'security',
        loadChildren: './security/security.module#SecurityModule',
        data: {
          title: '安全中心'
        }
      }, {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
        data: {
          title: '个人中心'
        }
      }, {
        path: 'charge',
        component: ChargeComponent,
        data: {
          title: '充值'
        }
      }, {
        path: 'game-center',
        component: GameCenterComponent,
        data: {
          title: '游戏中心'
        }
      }
    ]
  }
];

@NgModule({
  declarations: [
    ChargeComponent,
    GameCenterComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LoginComponent,
    RegisterComponent,
    LayoutDefaultComponent,
    ForgetComponent,
    ChangePasswordComponent,
    KickComponent,
    IdentityAuthComponent,
    BalanceComponent,
    ChargeRecordComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
