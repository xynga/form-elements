import { Component, Input, Output, EventEmitter } from '@angular/core';
var RadioButtonComponent = /** @class */ (function () {
    function RadioButtonComponent() {
        this.buttons = [];
        this.selected = 0;
        this.selectedChanged = new EventEmitter();
        this.au = [];
    }
    RadioButtonComponent.prototype.ngOnInit = function () {
        this.setAuStyles();
    };
    RadioButtonComponent.prototype.onKeydown = function (event, index) {
        if (13 === event.keyCode) {
            if (null === index) {
                index = (this.selected + this.buttons.length + (event.shiftKey ? -1 : 1)) % this.buttons.length;
            }
            this.onClick(index);
            event.stopPropagation();
        }
    };
    RadioButtonComponent.prototype.onClick = function (index) {
        if (this.selected !== index) {
            var animation = this.auAnimateFrom(index);
            this.au[this.selected] = this.auPosition(this.selected);
            this.selected = index;
            this.au[index] = this.auStyle(index) + ' ' + animation;
            this.selectedChanged.emit(this.selected);
        }
    };
    RadioButtonComponent.prototype.setAuStyles = function () {
        for (var i = this.buttons.length - 1; 0 <= i; i--) {
            this.au[i] = this.auStyle(i);
        }
    };
    RadioButtonComponent.prototype.auAnimateFrom = function (index) {
        return 'from-x-position-' + (this.selected - index);
    };
    RadioButtonComponent.prototype.auStyle = function (index) {
        return this.auPosition(index) + (this.selected === index ? ' selected' : '');
    };
    RadioButtonComponent.prototype.auPosition = function (index) {
        return 'width-1-' + this.buttons.length + ' left-' + index + '-' + this.buttons.length;
    };
    RadioButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'radio-button',
                    template: "\n    <au (keydown)=\"onKeydown($event, null)\" tabindex=\"0\">\n      <au *ngFor=\"let button of buttons; let i=index;\" (keydown)=\"onKeydown($event, i)\" (click)=\"onClick(i)\" [attr.au]=\"au[i]\" class=\"option\" tabindex=\"0\">\n        {{button}}\n      </au>\n    </au>\n  ",
                    styles: ["\n      :host{display:inline-block;position:relative;height:42px;width:100%;border:1px solid;background-color:#fff;cursor:pointer}:host *{font-family:\"Gotham SSm A\",\"Gotham SSm B\",\"Helvetica Neue\",Helvetica,Arial,sans-serif}:host>au{display:block;position:absolute;width:100%;height:100%}:host>au .option{display:flex;position:absolute;height:100%;justify-content:center;align-items:center;white-space:nowrap;overflow:hidden;text-transform:capitalize;animation-duration:1s}:host>au .option:not(:last-of-type){border-right:1px solid}:host>au .option[au~=\"selected\"]{z-index:1;background-color:#c0d82f}:host>au .option:not([au~=\"selected\"]){z-index:0}:host>au .option:not([au~=\"selected\"]):hover,:host>au .option:not([au~=\"selected\"]):focus{background-color:#d4f024;box-shadow:2px 2px 6px rgba(0,0,0,0.75)}.pure-u-2-3,.pure-u-1-3{display:inline-block;*display:inline;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-u-2-3{width:66.6667%;*width:66.6357%}.pure-u-1-3{width:33.3333%;*width:33.3023%}\n    "]
                },] },
    ];
    /** @nocollapse */
    RadioButtonComponent.ctorParameters = function () { return []; };
    RadioButtonComponent.propDecorators = {
        'buttons': [{ type: Input },],
        'selected': [{ type: Input },],
        'selectedChanged': [{ type: Output },],
    };
    return RadioButtonComponent;
}());
export { RadioButtonComponent };
//# sourceMappingURL=radio-button.component.js.map