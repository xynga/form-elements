import { EventEmitter } from '@angular/core';
export declare type Year = string;
export declare class YearSelectorComponent {
    year: Year;
    years: Year[];
    customSelectModifier: string;
    yearChanged: EventEmitter<Year>;
    onChange(year: Year): void;
}
