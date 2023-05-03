function escapeRegexp(s: string): string {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export class TopicUrls {
  public alternativeTo: string | null;
  public changeLog: string | null;
  public runKit: string | null;

  constructor(
    public webSite?: string | null,
    public wikipedia?: string| null,
    public gitHub?: string| null,
    public npm?: string| null,
    public stackOverFlow?: string | null,
    public stackShare?: string | null,
    public twitter?: string | null,
    alternativeTo?: string | null,
    changeLog?: string | null,
    runKit?: string | null,
  ) {
    this.alternativeTo = alternativeTo ?? null; // for firebase
    this.changeLog = changeLog ?? null; // for firebase
    this.runKit = runKit ?? null; // for firebase
  }
}

export type Url = string;

export class Topic {
  logo!: string;
  id!: string;
  logoSize!: number[];

  public pressKitUrl?: Url;

  constructor(
    public name: string,
    logo?: string | null,
    public website?: Url | null,
    public related: Topic[] = [],
    public urls?: TopicUrls,
    public dependencies?: Topic[],
    public shortName?: string,
    public logoTypeWide?: boolean,
    public iconWebsite?: string | string[],
    public iconUrl?: Url,
    public subTopics?: any,
    public organisation?: any,
    public categories?: any,
    public ecosystem?: any,
    public logoSmallIcon?: string,
    public description?: string,
    public comments?: string,
    public tagline?: string,
  ) {
    this.setNameAndLogoAndId(name, logo!);
  }

  private static regexpImageFileEndingWithExtension = /.*\.(png|svg|jpg)$/;

  public setNameAndLogoAndId(name: string, logo?: string): void {
    this.name = name;
    this.id = name
      .replace('#', '_Sharp')
      .replace(/^\./, 'Dot_')
      .replace(/\./, '_Dot_')
      .replace(/\//, '_Slash_');

    if (logo === undefined) {
      this.logo = this.getLogoPath(this.getLogoFileName(name.toLowerCase()));
    } else {
      this.logo = this.getLogoPath(logo);
    }

    if (this.logo && !this.logo.toLowerCase().match(Topic.regexpImageFileEndingWithExtension)) {
      this.logo = this.logo + '.svg';
    }
  }

  public getLogoPath(iconFileName: string): string {
    return '../../../assets/images/logos-l/logos/' + iconFileName;
  }

  private getLogoFileName(tag: string): string {
    return (
      tag.toLowerCase().replace(/ /g, '-') +
      (tag.toLowerCase().match(Topic.regexpImageFileEndingWithExtension) ? '' : '.svg')
    );
  }

  matchesTextFilter(filterString: string): boolean {
    if (!filterString) {
      return true;
    }
    filterString = escapeRegexp(filterString);
    return this.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1;
  }

  setLogo(icon: string): Topic {
    this.logo = this.getLogoPath(icon);
    return this;
  }

  setRelated(...related: Topic[]): Topic {
    this.related = related;
    return this;
  }

  setId(id: string): Topic {
    this.id = id;
    return this;
  }

  setName(name: string): Topic {
    this.name = name;
    return this;
  }

  sealAndValidate(): void {
    // FIXME
  }
}
