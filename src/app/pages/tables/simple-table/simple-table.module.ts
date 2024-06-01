import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent } from './simple-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../../core/page-header/page-header.module';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { SimpleTableRoutingModule } from './simple-table-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SimpleTableRoutingModule,
    FormsModule,
    FlexLayoutModule,
    PageHeaderModule,
    BreadcrumbsModule,
    MatCheckboxModule,
    MatCardModule
  ],
  declarations: [SimpleTableComponent]
})
export class SimpleTableModule { }
