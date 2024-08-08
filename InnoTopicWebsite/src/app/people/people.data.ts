import {dictToArrayAssigningIds} from "../utils/dictionary-utils";

export function person(x: any) {
  return {
    get fullName(): string {
      return this.givenNames + ' ' + this.surnames
    },
    ...x /* this could overwrite fullName*/,
  }
}

export const companies = {
  InnoTopic: "InnoTopic SLU"
}

export const timezones = {
  CET: {
    utcOffset: 2 // TODO summer time and whatnot; we can fetch from some DB, but overkill ahahaha
  }
}

export const cities = {
  Malaga: {
    city: "Málaga",
    countryCodeISO3166_1Alpha2: "ES",
    coords: {
      // TODO: lat lng @Jay
    },
    timeZone: timezones.CET,
  },
  Berlin: {
    city: "Berlin",
    countryCodeISO3166_1Alpha2: "DE",
    coords: {
      // TODO: lat lng @Jay
    },
    timeZone: timezones.CET,
  },
  Surat: {
    city: "Surat",
    countryCodeISO3166_1Alpha2: "IN",
    coords: {
      // TODO: lat lng @Jay
    }
  },
  Chandigarh: {
    city: "Chandigarh",
    countryCodeISO3166_1Alpha2: "IN",
    coords: {
      // TODO: lat lng @Jay
    }
  }
}

// later this could come from db e.g. Supabase

export const people = {

  karol: person({
    givenNames: "Karol",
    surnames: "Depka Pradzinski",
    position: "CEO, Chief Software Developer",
    imageUrl: "https://media.licdn.com/dms/image/C4D03AQFcgqkctrdd8g/profile-displayphoto-shrink_400_400/0/1661274041297?e=1728518400&v=beta&t=rbYZHGuKDkWgovM1TC5S6rh_JwYHju4M5egCLrK7NO0",

    company: companies.InnoTopic,
    // note we r using "position", not "title", as title, could be smth like PhD.
    tagline: "#Rust and #TypeScript enthusiast with a broad experience, especially in #Frontend",
    location: cities.Malaga,
    skills: {
      Angular: { level: "expert" /* TODO unify check level */},
    },
    profiles: {
      // externalProfilesKarol
      linkedIn: "https://linkedin.com/in/karoldepka",
    }
  }),

  DrIT: person({
    givenNames: "Jolanda Gerda",
    surnames: "Tromp (PhD)",
    formalTitle: "PhD",
    position: "CMO, Chief Metaverse Officer",
    imageUrl: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",

    // company: companies.XR-Prototyping /* TBD InnoTopic */,
    company: companies.InnoTopic /* TBD InnoTopic */,
    // note can list as CMO for InnoTopic?
    // tagline: "#XR and #HCI enthusiast with broad experience, especially in #Research, #Prototyping, #Innovation, #Mentoring, #Curriculum, #Startups",
    location: cities.Malaga,
    skills: {
      "Human Factors Design and Evaluation": { level: "expert"},
    }
  }),


  dmilith: person({
    givenNames: "Daniel",
    surnames: "Dettlaff",
    imageUrl: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",

    position: "#Rust expert, CTO",
  }),


  "Joisco": person({
    givenNames: "Joseph",
    position: "#LLM intern specializing in #Python",
    imageUrl: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",

    tagline: "Finding creative solutions with #LLM-s, #Python, #Ollama and #LangChain" // TODO: AutoGen when icon
  }),

  jay: person({
    givenNames: "Jay",
    surnames: "Tailor",
    company: companies.InnoTopic,
    position: "Full Stack #typescript and #javascript developer, Specialization in #Angular",
    // position: "Full Stack #typescript and #javascript developer, Specialization in #Angular also works with #Node.js and #NestJS", TODO: check why node and nest is not working
    location: cities.Surat,
    imageUrl: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",

    skills: {
      Angular: { level: "expert" },
      NodeJs: { level: "professional" },
      ExpressJs: { level: "expert" },
      NestJs: { level: "professional" },
      ReactJs: { level: "intermediate" }
    },
    profiles: {
      twitter: "https://x.com/JayTailor45",
      linkedIn: "https://linkedin.com/in/jaytailor45",
      facebook: "https://www.facebook.com/jaytailor45",
    }
  }),

  Nekmo: person({
    position: "#Python and #Django Expert",
    imageUrl: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",

  }),


  noviodelangel: person({
    givenNames: "Mateusz",
    surnames: "Werpulewski",
    imageUrl: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",

    position: "Full Stack Developer",
    company: companies.InnoTopic,
    tagline: "#Java and #TypeScript developer with a broad experience, especially in #Backend",
    skills: {
      Java: { level: "advanced"},
      TypeScript: { level: "advanced"},
    }
  }),

  samyak: person({
    position: "Part-time Intern",
    givenNames: "Samyak",
 
    surnames: "Jain",
    location: cities.Chandigarh,
    imageUrl: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
  }),


  paco: person({
    position: "Part-time LLM intern",
    imageUrl: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",

  }),

  janek: person({
    firstName: "Jan",
    imageUrl: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",

    position: "#PHP Architect and Expert at #Laravel and #Symfony",
    location: cities.Berlin,
  }),

}

export const peopleArray = dictToArrayAssigningIds<any>(people)
