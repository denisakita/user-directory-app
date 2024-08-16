import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromComponents from "./components/index";
import {UserListComponent} from "./components";


@NgModule({
  declarations: [
    ...fromComponents.components,
  ],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule {
}
