export enum LanguageLevel {
  BEGINNER='Beginner',
  INTERMEDIATE='Intermediate',
  PROFESSIONAL='Full professional proficiency',
  NATIVE='Native',
}

export type LanguageDetail = {
  flags: string;
  level: LanguageLevel;
};

export function experience(flags: string, level: LanguageLevel) {
  return { flags: flags || '', level };
}

export class Language {
  name: string;
  details: LanguageDetail;

  constructor(name: string, details: LanguageDetail) {
    this.name = name;
    this.details = details;
  }
}
