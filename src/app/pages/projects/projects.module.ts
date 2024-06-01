import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PageHeaderModule } from '../../core/page-header/page-header.module';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';
import { ProjectsRoutingModule } from './projects.routing';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    RouterModule,
    PageHeaderModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
