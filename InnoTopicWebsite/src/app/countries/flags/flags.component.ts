import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.sass']
})
export class FlagsComponent implements OnInit {

  @Input() flags!: string
  flagsArray!: any;

  constructor() { }

  ngOnInit() {
    this.flagsArray = this.flags.split(' ').map(_ => _ === 'uk' ? 'gb' : _)
  }

}
