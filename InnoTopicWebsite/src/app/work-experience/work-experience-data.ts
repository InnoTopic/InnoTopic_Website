import {
  beginner,
  advanced,
  expert,
  intermediate,
  we,
  experience,
} from './work-experience';

export const workExperience/*: Partial<MapsToSchema>*/ = experience({
  Yarn:
    we(intermediate),
  D3:
    we(intermediate, expert),
  NPM:
    we(),
  // lodash:
  //   {},
  jQuery:
    we(intermediate),
  SVG:
    we(advanced, expert),
  'ag-Grid':
    we(advanced, expert),
  MongoDB:
    we(intermediate, advanced),
  Mongoose:
    we(intermediate, advanced),

});

const e = we();

export const experienceAigRap = experience({
  MongoDB: e,
  Mongoose: e,
  KeystoneJS: e,
  Express: e,
})
