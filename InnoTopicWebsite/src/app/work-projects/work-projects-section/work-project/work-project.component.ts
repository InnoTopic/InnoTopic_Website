import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { faLaptop } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-work-project',
  templateUrl: './work-project.component.html',
  styleUrls: ['./work-project.component.sass']
})
export class WorkProjectComponent implements OnInit {

  faLaptop = faLaptop

  @Input() project

  @Input() projectTitle: string

  constructor() { }

  ngOnInit() {
  }

}
