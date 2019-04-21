function escapeRegexp(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export class TopicUrls {
  constructor(
    public webSite,
    public wikipedia?,
    public gitHub?,
    public npm?,
    public stackOverFlow?,
    public stackShare?,
    public twitter?,
    public alternativeTo?,
    public changeLog?,
    public runKit?,
  ) {
    if ( this.alternativeTo === undefined ) {
      this.alternativeTo = null // for firebase
    }
    if ( this.changeLog === undefined ) {
      this.changeLog = null // for firebase
    }
    if ( this.runKit === undefined ) {
      this.runKit = null // for firebase
    }
  }
}

export class Topic {
  logo: string;
  id: string
  logoSize: number[]

  // TODO: introduce a separate TopicMetaData or TopicPages class. Will be easier to put it in a separate firebase location.

  constructor(
    public name: string,
    // public topicId?,
    logo?: string,
    public website?: string,
    public related?: Topic[],
    public urls?: TopicUrls,
    public dependencies?: Topic[],
    public shortName?: string,
    public logoTypeWide?: boolean,
    // just to match types for now:
    public iconWebsite?: string,
    public iconUrl?: string,
    public subTopics?: any,
    public organisation?: any,
    public categories?: any,
    public ecosystem?: any,
) {
    // console.log('new Topic(', name)
    this.setNameAndLogoAndId(name, logo);
    // if ( this.website === undefined ) {
    //   this.website = null // for firebase, because it does not allow to save undefined
    // }
    if ( this.related === undefined ) {
      this.related = null // for firebase, because it does not allow to save undefined
    }
    // if ( this.urls === undefined ) {
    //   this.urls = new TopicUrls(null, null, null, null, null, null) // for firebase, because it does not allow to save undefined
    // }
    if ( this.id.match(/\.|#|\$|\[|\]|\//) ) {
      const message = 'Topic id contains illegal char: '
      console.error(message, this)
      window.alert(message + this.id)
      return null
    }
  }

  /** Using Convention Over Configuration */
  public setNameAndLogoAndId(name: string, logo?: string) {
    // console.log('setNameAndLogoAnd name ' + name)
    this.name = name
    this.id = name
      .replace('#', '_Sharp')
      .replace(/^\./, 'Dot_')
      .replace(/\./, '_Dot_')
      .replace(/\//, '_Slash_');
    if (this.id !== name) {
      // console.log('id mangled from name: ' + this.id)
    }
    if ( this.logo === undefined /* do not override */ ) {
      if (logo === null) {
        this.logo = null;
      } else if (logo === undefined) {
        this.logo = this.getLogoPath(name);
      } else {
        this.logo = this.getLogoPath(logo);
      }
    } else {
      if ( this.logo !== null ) {
        this.logo = this.getLogoPath(this.logo)
      }
    }
    // console.log('setNameAndLogoAndId ' + this.id, this)
  }

  public getLogoPath(tag: string) {
    // return '../../../assets/images/logos/' + tag.toLowerCase() + '-icon.svg'
    return '../../../assets/images/logos/' + tag.toLowerCase().replace(/ /g, '-') +
      (tag.toLowerCase().match(/.*\.(png|svg)$/) ? '' : '.svg')
  }

  matchesTextFilter(filterString: string) {
    if ( ! filterString ) {
      return true;
    }
    filterString = escapeRegexp(filterString)
    // return this.name.toLowerCase().indexOf(filterString.toLowerCase()) === 0;
    return this.name.toLowerCase().match(filterString.toLowerCase());
  }

  setLogo(icon: string) {
    this.logo = this.getLogoPath(icon)
    return this
  }

  setRelated(...related) {
    this.related = related
    return this
  }

  setId(id) {
    this.id = id
    return this
  }

  setName(name) {
    this.name = name
    return this
  }

  sealAndValidate() {
    // FIXME
  }
}
