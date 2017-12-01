import { OnInit, EventEmitter } from '@angular/core';
export declare class RadioButtonComponent implements OnInit {
    buttons: string[];
    selected: number;
    selectedChanged: EventEmitter<number>;
    au: string[];
    ngOnInit(): void;
    onKeydown(event: KeyboardEvent, index: number): void;
    onClick(index: number): void;
    private setAuStyles();
    private auAnimateFrom(index);
    private auStyle(index);
    private auPosition(index);
}
