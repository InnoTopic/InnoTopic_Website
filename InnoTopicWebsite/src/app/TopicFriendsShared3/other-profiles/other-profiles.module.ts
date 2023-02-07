import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserOtherProfileIconComponent } from './user-other-profile-icon/user-other-profile-icon.component';
import { OtherProfileUserNameComponent } from './user-other-profiles/other-profile-user-name/other-profile-user-name.component';
import { UserOtherProfilesComponent } from './user-other-profiles/user-other-profiles.component';

const exports = [
  UserOtherProfileIconComponent,
  OtherProfileUserNameComponent,
  UserOtherProfilesComponent,
]

@NgModule({
  declarations: [
    ...exports,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    exports,
  ]
})
export class OtherProfilesModule { }
