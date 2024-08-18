import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatPaginator} from '@angular/material/paginator';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatToolbar} from '@angular/material/toolbar';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatSort} from '@angular/material/sort';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from '@angular/material/card';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MatPaginator,
    MatTable,
    MatCell,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatToolbar,
    MatFormField,
    MatIcon,
    MatSort,
    MatButton,
    MatIconButton,
    MatInput,
    MatLabel,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardTitle,
    MatProgressSpinner,
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    MatNavList,
    MatMenu,
    MatMenuTrigger,
    MatListItem,
    MatMenuItem,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef


  ],
  exports: [
    MatPaginator,
    MatTable,
    MatCell,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatToolbar,
    MatFormField,
    MatIcon,
    MatSort,
    MatButton,
    MatIconButton,
    MatInput,
    MatLabel,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardTitle,
    MatProgressSpinner,
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    MatNavList,
    MatMenu,
    MatMenuTrigger,
    MatListItem,
    MatMenuItem,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef


  ]
})
export class MaterialModule {
}
