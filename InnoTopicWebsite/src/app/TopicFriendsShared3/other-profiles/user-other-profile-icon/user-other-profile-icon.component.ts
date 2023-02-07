import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserOtherProfileDescriptor } from '../other-profiles-core/UserOtherProfilesDescriptors';

@Component({
  selector: 'app-user-other-profile-icon',
  templateUrl: './user-other-profile-icon.component.html',
  styleUrls: ['./user-other-profile-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserOtherProfileIconComponent implements OnInit {

  @Input() readonly descriptor: UserOtherProfileDescriptor

  constructor(
    public domSanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
  }

}
