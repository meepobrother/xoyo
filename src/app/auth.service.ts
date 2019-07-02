import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface Account {
  username: string;
  lastLoginTime: string;
  lastLoginIp: string;
  permissions: string[];
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  account: Account;
  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    const account: Account = {
      username,
      lastLoginIp: '192.168.0.1',
      lastLoginTime: '2019-6-27',
      permissions: []
    };
    this.account = account;
    return of(true);
  }

  isLogin() {
    return !!this.account;
  }
  /**
   * 是否拥有某个连接的权限
   * @param {string} link
   */
  hasRole(link: string) {
    if (!this.account) {
      return false;
    } else {
      return this.account.permissions.indexOf(link) > -1;
    }
  }

  logout() {
    this.account = undefined;
  }
}
