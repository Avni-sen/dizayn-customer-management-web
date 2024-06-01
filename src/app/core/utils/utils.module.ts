import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './click-outside.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ClickOutsideDirective,
    HighlightDirective
  ],
  exports: [
    ClickOutsideDirective,
    HighlightDirective
  ]
})
export class UtilsModule { }
