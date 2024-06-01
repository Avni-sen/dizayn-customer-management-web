import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageHeaderModule } from '../../core/page-header/page-header.module';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProjectDetailsRoutingModule } from './project-details.routing';

@NgModule({
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule,
    FlexLayoutModule,
    PageHeaderModule,
    BreadcrumbsModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule
  ],
  declarations: [ProjectDetailsComponent]
})
export class ProjectDetailsModule { }
