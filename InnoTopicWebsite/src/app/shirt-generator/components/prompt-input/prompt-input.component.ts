import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-prompt-input',
  templateUrl: './prompt-input.component.html',
  styleUrls: ['./prompt-input.component.scss'],
})
export class PromptInputComponent {

  searchInput = '';

  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  onSearchClick() {
    this.searchEvent.emit(this.searchInput);
  }

}
