import { EventEmitter } from '@angular/core';
export declare class DropdownComponent {
    name: string;
    options: string[] | ((selected: string) => string[]);
    selected: string;
    placeholder: string;
    optionChanged: EventEmitter<string>;
    getOptions(): string[];
    onChange(option: string): void;
}
