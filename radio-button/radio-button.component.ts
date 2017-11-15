import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html'
})
export class RadioButtonComponent implements OnInit {
  @Input() buttons: string[] = [];
  @Input() selected = 0;

  @Output() selectedChanged: EventEmitter<number> = new EventEmitter<number>();

  public au: string[] = [];

  public ngOnInit(): void {
    this.setAuStyles();
  }

  public onKeydown(event: KeyboardEvent, index: number): void {
    if (13 === event.keyCode) {
      if (null === index) {
        index = (this.selected + this.buttons.length + (event.shiftKey ? -1 : 1)) % this.buttons.length;
      }
      this.onClick(index);
      event.stopPropagation();
    }
  }

  public onClick(index: number): void {
    if (this.selected !== index) {
      const animation: string = this.auAnimateFrom(index);
      this.au[this.selected] = this.auPosition(this.selected);
      this.selected = index;
      this.au[index] = this.auStyle(index) + ' ' + animation;
      this.selectedChanged.emit(this.selected);
    }
  }

  private setAuStyles(): void {
    for (let i = this.buttons.length - 1; 0 <= i; i--) {
      this.au[i] = this.auStyle(i);
    }
  }

  private auAnimateFrom(index: number): string {
    return 'from-x-position-' + (this.selected - index);
  }

  private auStyle(index: number): string {
    return this.auPosition(index) + (this.selected === index ? ' selected' : '');
  }

  private auPosition(index: number): string {
    return 'width-1-' + this.buttons.length + ' left-' + index + '-' + this.buttons.length;
  }
}
