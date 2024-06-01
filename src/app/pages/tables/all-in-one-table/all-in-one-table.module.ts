import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllInOneTableComponent } from './all-in-one-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AllInOneTableRoutingModule } from './all-in-one-table-routing.module';
import { ListModule } from '../../../core/list/list.module';
import { CustomerCreateUpdateModule } from './customer-create-update/customer-create-update.module';
import { PageHeaderModule } from '../../../core/page-header/page-header.module';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';

@NgModule({
  imports: [
    CommonModule,
    AllInOneTableRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,

    // Core
    ListModule,
    CustomerCreateUpdateModule,
    PageHeaderModule,
    BreadcrumbsModule
  ],
  declarations: [AllInOneTableComponent],
  exports: [AllInOneTableComponent]
})
export class AllInOneTableModule { }
