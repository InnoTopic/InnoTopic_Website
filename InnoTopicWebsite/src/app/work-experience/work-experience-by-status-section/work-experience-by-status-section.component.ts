import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

/** status: mode / approach */
@Component({
  selector: 'app-work-experience-by-status-section',
  templateUrl: './work-experience-by-status-section.component.html',
  styleUrls: ['./work-experience-by-status-section.component.sass']
})
export class WorkExperienceByStatusSectionComponent implements OnInit {

  @Input() title
  @Input() comment
  @Input() experience

  constructor() { }

  ngOnInit() {
  }

}
