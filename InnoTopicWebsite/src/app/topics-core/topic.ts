function escapeRegexp(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export class TopicUrls {
  constructor(
    public wikipedia,
    public gitHub,
    public npm,
    public stackOverFlow,
    public stackShare,
    public twitter,
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

/* TODO rename to Topic */
export class Topic {
  logo: string;
  id: string

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
    public logoTipoWide?: boolean
  ) {
    // console.log('new Topic(', name)
    this.id = name
      .replace('#', '_Sharp')
      .replace(/^\./, 'Dot_')
      .replace(/\./, '_Dot_')
      .replace(/\//, '_Slash_')
    if ( this.id !== name ) {
      // console.log('id mangled from name: ' + this.id)
    }
    if ( logo === null ) {
      this.logo = null;
    } else if ( logo === undefined ) {
      this.logo = this.getLogoPath(name);
    } else {
      this.logo = this.getLogoPath(logo);
    }
    if ( this.website === undefined ) {
      this.website = null // for firebase, because it does not allow to save undefined
    }
    if ( this.related === undefined ) {
      this.related = null // for firebase, because it does not allow to save undefined
    }
    if ( this.urls === undefined ) {
      this.urls = new TopicUrls(null, null, null, null, null, null) // for firebase, because it does not allow to save undefined
    }
    if ( this.id.match(/\.|#|\$|\[|\]|\//) ) {
      const message = 'Topic id contains illegal char: '
      console.error(message, this)
      window.alert(message + this.id)
      return null
    }
  }

  public getLogoPath(tag: string) {
    // return '../../../assets/images/logos/' + tag.toLowerCase() + '-icon.svg'
    return '../../../assets/images/logos/' + tag.toLowerCase().replace(/ /g, '-') +
      (tag.toLowerCase().endsWith('.png') ? '' : '.svg')
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

}