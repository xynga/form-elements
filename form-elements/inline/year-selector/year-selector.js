import { Component, Input, Output, EventEmitter } from '@angular/core';
var SELECTOR = 'year-selector';
var YearSelectorComponent = /** @class */ (function () {
    function YearSelectorComponent() {
        this.years = [];
        this.customSelectModifier = 'stacked';
        this.yearChanged = new EventEmitter();
    }
    YearSelectorComponent.prototype.onChange = function (year) {
        this.yearChanged.emit(year);
    };
    YearSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: SELECTOR,
                    template: "\n\n\n      <span *ngIf=\"1 === years.length\">{{years[0]}}</span>\n      <select *ngIf=\"1 < years.length\" id=\"year_select\" name=\"year_select\" (change)=\"onChange(year)\" [(ngModel)]=\"year\" >\n        <option *ngFor=\"let option of years\" [value]=\"option\" [label]=\"option\" [selected]=\"option == year\"></option>\n      </select>\n  "
                },] },
    ];
    /** @nocollapse */
    YearSelectorComponent.ctorParameters = function () { return []; };
    YearSelectorComponent.propDecorators = {
        'year': [{ type: Input },],
        'years': [{ type: Input },],
        'customSelectModifier': [{ type: Input },],
        'yearChanged': [{ type: Output },],
    };
    return YearSelectorComponent;
}());
export { YearSelectorComponent };
//# sourceMappingURL=year-selector.js.map