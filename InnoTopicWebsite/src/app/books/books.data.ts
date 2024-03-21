import {Dict, dictToArrayAssigningIds} from "../utils/dictionary-utils";

export type BookId = string

export class Book {
  coverUrl!: string
  authors?: string
  id!: BookId
}

function book(param: Omit<Book, 'id'>): Book {
  return param as Book
}

/* TODO think of other materials like:
* - linkedin courses!
* - Other courses / certs like Frontend Masters / Udemy
* - blinkist
* - youtube
* - articles
*  */
export class BooksData {
  'The Pragmatic Programmer: 20th Anniversary Edition, 2nd Edition' = {
    coverUrl: 'https://m.media-amazon.com/images/I/51A8l+FxFNL._SL500_.jpg'
  }
  'Clean Code: A Handbook of Agile Software Craftsmanship' = {
    coverUrl: 'https://m.media-amazon.com/images/I/41EYLUDaF8L._SL500_.jpg'
  }
  'The Clean Coder: A Code of Conduct for Professional Programmers' = {
    coverUrl: 'https://m.media-amazon.com/images/I/51VzkJGKrjL._SL500_.jpg'
  }
  "Clean Architecture: A Craftsman's Guide to Software Structure and Design" = {
    coverUrl: 'https://m.media-amazon.com/images/I/51ev4PLtsML._SL500_.jpg'
  }
  // Clean agile https://www.audible.com/pd/Clean-Agile-Audiobook/B08X7D3YFR?qid=1691811063&sr=1-9&ref=a_search_c3_lProduct_1_9&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=1B35JXT9H024G6A4SRJA&pageLoadId=RrOKaesfNUKAz8g5&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c
  'How Google Works' = {
    coverUrl: 'https://m.media-amazon.com/images/I/41G1VhthlzL._SL500_.jpg'
  }
  'Zero to One'= {
    coverUrl: 'https://m.media-amazon.com/images/I/41UpV7crlHL._SL500_.jpg',
    url: 'https://www.audible.com/pd/Zero-to-One-Audiobook/B00M27LBU2',
  }
  'The Lean Startup' = {
    coverUrl: 'https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg'
  }
  'Hooked' = {
    coverUrl: 'https://m.media-amazon.com/images/I/41kva4cz1cL._SL500_.jpg'
  }
  'Ultralearning: Master Hard Skills, Outsmart the Competition, and Accelerate Your Career' = {
    coverUrl: 'https://m.media-amazon.com/images/I/51D5dwBcSFL._SL500_.jpg'
  }
  'Getting Things Done' = {
    coverUrl: 'https://m.media-amazon.com/images/I/51bGhYfO9KL._SL500_.jpg'
  }
  'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones' = {
    coverUrl: 'https://m.media-amazon.com/images/I/513Y5o-DYtL._SL500_.jpg'
  }
  'The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution' = {
    coverUrl: 'https://m.media-amazon.com/images/I/51cqafqROkL._SL500_.jpg'
  }
  'Digital Wars: Apple, Google, Microsoft, and the Battle for the Internet' = {
    coverUrl: 'https://m.media-amazon.com/images/I/61z6Ewu6grL._SL500_.jpg'
  }
  'Remote: Office Not Required' = {
    coverUrl: 'https://m.media-amazon.com/images/I/41PLDxKsp9L._SL500_.jpg'
  }
  'The Presentation Secrets of Steve Jobs: How to Be Insanely Great in Front of Any Audience' = {
    coverUrl: 'https://m.media-amazon.com/images/I/51wBNi8UkWL._SL500_.jpg'
  }
  'Mastery' = {
    coverUrl: 'https://m.media-amazon.com/images/I/41y9IkSGfwL._SL500_.jpg'
  }
  'Do More Faster: TechStars Lessons to Accelerate Your Startup' = {
    coverUrl: 'https://m.media-amazon.com/images/I/51BnGx552VL._SL500_.jpg'
  }
  'The Launch Pad: Inside Y Combinator, Silicon Valley\'s Most Exclusive School for Startups' = {
    coverUrl: 'https://m.media-amazon.com/images/I/51CAcUcNUjL._SL500_.jpg'
  }
  'No Excuses!: The Power of Self-Discipline for Success in Your Life' = book({
    coverUrl: 'https://m.media-amazon.com/images/I/51e6+Tmt0jL._SL500_.jpg'
  })
  'Steve Jobs: The Exclusive Biography' = {
    coverUrl: 'https://m.media-amazon.com/images/I/51b8AJgZETL._SL500_.jpg'
  }
  'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future' = {
    coverUrl: 'https://m.media-amazon.com/images/I/51IQzkj0+NL._SL500_.jpg'
  }
  'Inspired: How to Create Tech Products Customers Love, Second Edition' = {
    coverUrl: 'https://m.media-amazon.com/images/I/41OrmnAM5FL._SL500_.jpg'
  }
  'Refactoring: Improving the Design of Existing Code (2nd Edition) (Addison-Wesley Signature Series (Fowler))' = book({
    authors: 'Martin Fowler',
    coverUrl: 'https://m.media-amazon.com/images/I/41trAWIzKAL._SX401_BO1,204,203,200_.jpg'
  })
}

export const booksData = dictToArrayAssigningIds(new BooksData() as any as Dict<Book>)
