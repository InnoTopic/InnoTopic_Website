import { Injectable } from '@angular/core';

export class OtherProfile {
  userName?: string;
  url?: string;
  show?: boolean;
}

export class UserOtherProfiles {

  linkedIn?: OtherProfile;
  gitHub?: OtherProfile;
  stackOverflow?: OtherProfile;
  twitter?: OtherProfile;
  facebook?: OtherProfile;
  website?: OtherProfile;

  // Phone number/whatsapp
  // telegram (phone?)
  // google / hangouts
  // slack?
  // TODO: companyWebsite
  // blog

}

@Injectable()
export class UserOtherProfilesService {

  constructor(
  ) { }


}

