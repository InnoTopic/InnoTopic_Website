import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tinted-swatches',
  templateUrl: './tinted-swatches.component.html',
  styleUrls: ['./tinted-swatches.component.scss'],
})
export class TintedSwatchesComponent implements OnInit {

  @Input()
  colorVarName! : string

  constructor() { }

  ngOnInit() {}

}
