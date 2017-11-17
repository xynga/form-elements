import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AuComponent} from './radio-button/au';
import { DropdownComponent } from './dropdown/dropdown';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { YearSelectorComponent } from './year-selector/year-selector';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DropdownComponent,
    RadioButtonComponent,
    YearSelectorComponent,
      AuComponent,
  ],
  imports:[
    CommonModule,
    FormsModule,
  ],
  exports: [
    DropdownComponent,
    RadioButtonComponent,
    YearSelectorComponent
  ]
})
export class FormElementsModule{ }
