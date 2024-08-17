import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoResultsComponent, SideNavComponent} from "./components";
import {HomeRoutingModule} from "./home-routing.module";
import * as fromComponents from "./components/index";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";


@NgModule({
  declarations: [
    ...fromComponents.components,
  ],
  exports: [
    SideNavComponent,
    NoResultsComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MatSidenavContent,
    MatSidenavContainer,
    MatNavList,
    MatIcon,
    MatMenu,
    MatToolbar,
    MatMenuTrigger,
    MatSidenav,
    MatListItem,
    MatIconButton,
    MatMenuItem,
    HomeRoutingModule

  ]
})
export class HomeModule {
}
