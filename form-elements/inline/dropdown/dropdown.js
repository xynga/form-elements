import { Component, Input, Output, EventEmitter } from '@angular/core';
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        this.name = '';
        this.options = [];
        this.placeholder = '';
        this.optionChanged = new EventEmitter();
    }
    DropdownComponent.prototype.getOptions = function () {
        if (this.options instanceof Array) {
            return this.options;
        }
        else {
            return this.options(this.selected);
        }
    };
    DropdownComponent.prototype.onChange = function (option) {
        this.optionChanged.emit(option);
    };
    DropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dropdown',
                    template: "\n    <select [(ngModel)]=\"selected\" name=\"drop-down\" (change)=\"onChange(selected)\" >\n      <option *ngIf=\"placeholder && !selected\" [ngValue]=\"undefined\" disabled>\n        {{placeholder}}\n      </option>\n      <option *ngFor=\"let option of getOptions()\" name=\"option\" [value]=\"option\">\n        {{option}}\n      </option>\n    </select>\n  "
                },] },
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return []; };
    DropdownComponent.propDecorators = {
        'name': [{ type: Input },],
        'options': [{ type: Input },],
        'selected': [{ type: Input },],
        'placeholder': [{ type: Input },],
        'optionChanged': [{ type: Output },],
    };
    return DropdownComponent;
}());
export { DropdownComponent };
//# sourceMappingURL=dropdown.js.map