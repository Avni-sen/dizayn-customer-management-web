import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from '../../core/utils/utils.module';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { PageHeaderModule } from '../../core/page-header/page-header.module';
import { FormsRoutingModule } from './forms.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    BreadcrumbsModule,
    UtilsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule,
    PageHeaderModule
  ],
  declarations: [
    FormElementsComponent,
    FormWizardComponent
  ]
})
export class FormModule { }
