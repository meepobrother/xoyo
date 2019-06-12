import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsComponent } from './components.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DrawerComponent } from './drawer/drawer.component';
import { TabComponent } from './tab/tab.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CellComponent } from './cell/cell.component';
import { CellItemComponent } from './cell-item/cell-item.component';
import { UserCardComponent } from './user-card/user-card.component';
import { IconComponent } from './icon/icon.component';
import { AvatarComponent } from './avatar/avatar.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { FlexboxItemComponent } from './flexbox-item/flexbox-item.component';
import { RateComponent } from './rate/rate.component';
import { AuthIconComponent } from './auth-icon/auth-icon.component';
import { TabbarItemComponent } from './tabbar-item/tabbar-item.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { LinkListComponent } from './link-list/link-list.component';
import { SectionOuterComponent } from './section-outer/section-outer.component';
import { StringTemplateOutletDirective } from './string_template_outlet';
@NgModule({
  declarations: [
    ComponentsComponent, NavListComponent, NavItemComponent,
    TabbarComponent, NavbarComponent, DrawerComponent, TabComponent,
    TabbarItemComponent,
    ListComponent, ListItemComponent, CellComponent, CellItemComponent,
    UserCardComponent,
    IconComponent,
    AvatarComponent,
    FlexboxComponent,
    FlexboxItemComponent,
    RateComponent,
    AuthIconComponent,
    TabbarItemComponent,
    SectionTitleComponent,
    LinkListComponent,
    SectionOuterComponent,
    StringTemplateOutletDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StringTemplateOutletDirective,
    ComponentsComponent, NavListComponent, NavItemComponent,
    TabbarComponent, NavbarComponent, DrawerComponent, TabComponent,
    ListComponent, ListItemComponent, CellComponent, CellItemComponent,
    UserCardComponent, IconComponent, SectionTitleComponent,
    LinkListComponent, SectionOuterComponent
  ]
})
export class ComponentsModule { }
