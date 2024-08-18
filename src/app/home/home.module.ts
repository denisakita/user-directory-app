import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoResultsComponent, SideNavComponent} from "./components";
import {HomeRoutingModule} from "./home-routing.module";
import * as fromComponents from "./components/index";
import {MaterialModule} from "@shared/material.module";


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
    MaterialModule,

  ]
})
export class HomeModule {
}
