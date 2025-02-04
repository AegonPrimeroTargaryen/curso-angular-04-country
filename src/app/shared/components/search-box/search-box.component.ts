import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Output()
  public searchTextEmmit: EventEmitter<string> = new EventEmitter;

  @Input()
  public placeholder: string = '';

  searchTag(value: string): void {
    this.searchTextEmmit.emit(value);
  }
}
