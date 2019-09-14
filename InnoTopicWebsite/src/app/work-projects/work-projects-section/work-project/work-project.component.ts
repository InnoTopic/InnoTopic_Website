import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-work-project',
  templateUrl: './work-project.component.html',
  styleUrls: ['./work-project.component.sass']
})
export class WorkProjectComponent implements OnInit {

  @Input() project

  @Input() projectTitle: string

  constructor() { }

  ngOnInit() {
  }

}
