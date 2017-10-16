import {Component, Input, Output, EventEmitter} from '@angular/core';

// Externalized (polyglot) text values for field labels, input placeholders, button text
// screen reader text, page headings, user instructions, help messages, menu uploads, etc

type Year = string;

const SELECTOR: string = 'year-selector';

@Component({
  selector: SELECTOR,
  templateUrl: './year-selector.html'
})
export class YearSelectorComponent{
  @Input() year: Year;
  @Input() years: Year[] = [];
  @Input() customSelectModifier: string = 'stacked';

  @Output() yearChanged: EventEmitter<Year> = new EventEmitter<Year>();

  public onChange(year: Year): void {
    this.yearChanged.emit(year);
  }
}
