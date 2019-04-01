import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.scss']
})
export class WorkExperienceListComponent implements OnInit {

  @Input() experience

  constructor() { }

  ngOnInit() {
  }

}
