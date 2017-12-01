import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuComponent } from './radio-button/au';
import { DropdownComponent } from './dropdown/dropdown';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { YearSelectorComponent } from './year-selector/year-selector';
import { CommonModule } from "@angular/common";
var FormElementsModule = /** @class */ (function () {
    function FormElementsModule() {
    }
    FormElementsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DropdownComponent,
                        RadioButtonComponent,
                        YearSelectorComponent,
                        AuComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                    ],
                    exports: [
                        DropdownComponent,
                        RadioButtonComponent,
                        YearSelectorComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    FormElementsModule.ctorParameters = function () { return []; };
    return FormElementsModule;
}());
export { FormElementsModule };
//# sourceMappingURL=forms.module.js.map