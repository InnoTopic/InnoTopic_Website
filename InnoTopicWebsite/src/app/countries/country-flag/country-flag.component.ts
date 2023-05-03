import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.scss']
})
export class CountryFlagComponent implements OnInit {

  @Input() country!: string

  constructor() { }

  ngOnInit() {
  }

}
