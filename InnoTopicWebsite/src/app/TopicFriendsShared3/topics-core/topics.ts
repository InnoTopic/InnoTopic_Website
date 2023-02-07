import {
  Topic,
  TopicUrls,
} from './Topic';

export function tag(name: string, logo?: string, webSite?: string, related?: Topic[], urls?: TopicUrls, logoTipoWide?: boolean) {
  return new Topic(name, logo, webSite, related, urls, undefined, undefined, logoTipoWide);
}

export function tagNoIcon(name: string, related?: Topic[], urls?: TopicUrls) {
  return new Topic(name, null, null, related, urls);
}

/** Will cause double width for icon, because the logotipo's font otherwise is too tiny */
export function tagLogoType(name: string, logo?: string, website?, related?: Topic[], urls?: TopicUrls) {
  return tag(name, logo, website, related, urls, true); // pass visual hint later
}

export class TopicCategory {

  public topicsArray: Array<Topic>
  public get id() { return this.name }

  constructor(
    public name: string,
    public topicsById: any,
  ) {}
}
