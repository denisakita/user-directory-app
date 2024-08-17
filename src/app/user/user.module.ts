import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromComponents from "./components/index";
import {UserListComponent} from "./components";
import {MatPaginator} from "@angular/material/paginator";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbar} from "@angular/material/toolbar";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatSort} from "@angular/material/sort";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from "@angular/material/card";
import {UserRoutingModule} from "./user-routing.module";
import {MatProgressSpinner} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    ...fromComponents.components,
  ],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatPaginator,
    MatHeaderRow,
    MatRow,
    MatCell,
    MatTable,
    ReactiveFormsModule,
    MatToolbar,
    MatFormField,
    MatIcon,
    MatSort,
    MatHeaderCell,
    MatColumnDef,
    MatButton,
    MatIconButton,
    MatInput,
    MatLabel,
    MatHeaderRowDef,
    MatRowDef,
    MatCellDef,
    MatHeaderCellDef,
    MatCard,
    MatCardContent,
    UserRoutingModule,
    MatCardHeader,
    MatCardImage,
    MatCardTitle,
    MatProgressSpinner,
    MatCardActions
  ]
})
export class UserModule {
}
