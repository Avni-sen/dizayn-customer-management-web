import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollbarModule } from '../../../core/scrollbar/scrollbar.module';
import { PageHeaderModule } from '../../../core/page-header/page-header.module';
import { DatatableRoutingModule } from './datatable-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DatatableRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ScrollbarModule,
    PageHeaderModule,
    BreadcrumbsModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  declarations: [DatatableComponent]
})
export class DatatableModule { }
