import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-prompt-result',
  templateUrl: './prompt-result.component.html',
  styleUrls: ['./prompt-result.component.scss'],
})
export class PromptResultComponent  implements OnInit {

  @Input() promptResult: string[] = [];
  @Input() isLoading = false;

  constructor() { }

  ngOnInit() {}

}
