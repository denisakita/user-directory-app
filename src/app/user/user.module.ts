import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromComponents from "./components/index";
import {UserListComponent} from "./components";
import {UserRoutingModule} from "./user-routing.module";
import {MaterialModule} from "@shared/material.module";
import {HomeModule} from "../home/home.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ...fromComponents.components,
  ],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
    HomeModule,
    ReactiveFormsModule
  ]
})
export class UserModule {
}
