import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.html'
})
export class DropdownComponent {
  @Input() name: string = '';
  @Input() options: string[] | ((selected: string) => string[]) = [];
  @Input() selected: string = undefined;
  @Input() placeholder: string = '';

  @Output() optionChanged: EventEmitter<string> = new EventEmitter<string>();

  public getOptions(): string[] {
    if (this.options instanceof Array) {
      return this.options;
    }
    else {
      return this.options(this.selected);
    }
  }

  public onChange(option: string): void {
      this.optionChanged.emit(option);
  }
}
