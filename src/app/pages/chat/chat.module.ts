import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UtilsModule } from '../../core/utils/utils.module';
import { ScrollbarModule } from '../../core/scrollbar/scrollbar.module';
import { PageHeaderModule } from '../../core/page-header/page-header.module';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ChatRoutingModule } from './chat.routing';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    UtilsModule,
    ScrollbarModule,
    PageHeaderModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatMenuModule,
    MatButtonModule,
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
