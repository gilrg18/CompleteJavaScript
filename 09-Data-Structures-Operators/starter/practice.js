'use strict'
const books = [
    {
      title: 'Algorithms',
      author: ['Robert Sedgewick', 'Kevin Wayne'],
      publisher: 'Addison-Wesley Professional',
      publicationDate: '2011-03-24',
      edition: 4,
      keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
      pages: 976,
      format: 'hardcover',
      ISBN: '9780321573513',
      language: 'English',
      programmingLanguage: 'Java',
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.41,
          ratingsCount: 1733,
          reviewsCount: 63,
          fiveStarRatingCount: 976,
          oneStarRatingCount: 13
        }
      },
      highlighted: true
    },
    {
      title: 'Structure and Interpretation of Computer Programs',
      author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
      publisher: 'The MIT Press',
      publicationDate: '2022-04-12',
      edition: 2,
      keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
      pages: 640,
      format: 'paperback',
      ISBN: '9780262543231',
      language: 'English',
      programmingLanguage: 'JavaScript',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.36,
          ratingsCount: 14,
          reviewsCount: 3,
          fiveStarRatingCount: 8,
          oneStarRatingCount: 0
        }
      },
      highlighted: true
    },
    {
      title: 'Computer Systems: A Programmer\'s Perspective',
      author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
      publisher: 'Prentice Hall',
      publicationDate: '2002-01-01',
      edition: 1,
      keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
      pages: 978,
      format: 'hardcover',
      ISBN: '9780130340740',
      language: 'English',
      programmingLanguage: 'C',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 1010,
          reviewsCount: 57,
          fiveStarRatingCount: 638,
          oneStarRatingCount: 16
        }
      },
      highlighted: true
    },
    {
      title: 'Operating System Concepts',
      author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
      publisher: 'John Wiley & Sons',
      publicationDate: '2004-12-14',
      edition: 10,
      keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
      pages: 921,
      format: 'hardcover',
      ISBN: '9780471694663',
      language: 'English',
      programmingLanguage: 'C, Java',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 3.9,
          ratingsCount: 2131,
          reviewsCount: 114,
          fiveStarRatingCount: 728,
          oneStarRatingCount: 65
        }
      }
    },
    {
      title: 'Engineering Mathematics',
      author: ['K.A. Stroud', 'Dexter J. Booth'],
      publisher: 'Palgrave',
      publicationDate: '2007-01-01',
      edition: 14,
      keywords: ['mathematics', 'engineering'],
      pages: 1288,
      format: 'paperback',
      ISBN: '9781403942463',
      language: 'English',
      programmingLanguage: null,
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.35,
          ratingsCount: 370,
          reviewsCount: 18,
          fiveStarRatingCount: 211,
          oneStarRatingCount: 6
        }
      },
      highlighted: true
    },
    {
      title: 'The Personal MBA: Master the Art of Business',
      author: 'Josh Kaufman',
      publisher: 'Portfolio',
      publicationDate: '2010-12-30',
      keywords: ['business'],
      pages: 416,
      format: 'hardcover',
      ISBN: '9781591843528',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.11,
          ratingsCount: 40119,
          reviewsCount: 1351,
          fiveStarRatingCount: 18033,
          oneStarRatingCount: 1090
        }
      }
    },
    {
      title: 'Crafting Interpreters',
      author: 'Robert Nystrom',
      publisher: 'Genever Benning',
      publicationDate: '2021-07-28',
      keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
      pages: 865,
      format: 'paperback',
      ISBN: '9780990582939',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.7,
          ratingsCount: 253,
          reviewsCount: 23,
          fiveStarRatingCount: 193,
          oneStarRatingCount: 0
        }
      }
    },
    {
      title: 'Deep Work: Rules for Focused Success in a Distracted World',
      author: 'Cal Newport',
      publisher: 'Grand Central Publishing',
      publicationDate: '2016-01-05',
      edition: 1,
      keywords: ['work', 'focus', 'personal development', 'business'],
      pages: 296,
      format: 'hardcover',
      ISBN: '9781455586691',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.19,
          ratingsCount: 144584,
          reviewsCount: 11598,
          fiveStarRatingCount: 63405,
          oneStarRatingCount: 1808
        }
      },
      highlighted: true
    }
  ];

//DESTRUCTURING ARRAYS PRACTICE
const[firstBook, secondBook] = books;
console.log(firstBook, secondBook);

const [,,thirdBook] = books;
console.log(thirdBook);

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[,rating],[,ratingsCount]] = ratings
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings=0] = ratingStars
console.log(fiveStarRatings,oneStarRatings,threeStarRatings);

//DESTRUCTURING OBJECTS PRACTICE
const {title,author,ISBN}=books[0];
console.log(title,author,ISBN);

const {keywords:tags} = books[0];
console.log(tags);

const {language, programmingLanguage = 'unknown'} = books[6];
console.log(language,programmingLanguage);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';
//({title: bookTitle, author: bookAuthor}) =books[0];
console.log(bookTitle, bookAuthor);

const{thirdParty:{goodreads:{rating:bookRating}}}=books[0];
console.log(bookRating);

function printBookInfo({title, author, year='year unknown'}){
  console.log(`${title} by ${author}, ${year}`);
}
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

//THE SPREAD OPERATOR
const bookAuthors = [...books[0].author,...books[1].author]
console.log(bookAuthors);

function spellWord (str) {
  console.log(...str);
}

spellWord('JavaScript')

//REST PATTERN AND PARAMETERS
const [mainKeyword, ...rest] = books[0].keywords
console.log(mainKeyword, rest);

const{publisher: bookPublisher, ...restOfTheBook} = books[1];
console.log(bookPublisher, restOfTheBook);

function printBookAuthorsCount(title, ...authors){
  console.log(`The book "${title}" has ${authors.length} authors`);
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

function hasExamplesInJava(book){
  return book.programmingLanguage === 'Java' || 'no data available'
}

console.log(hasExamplesInJava(books[0]));

for(let i = 0;i <books.length;i++){
  console.log(books[i].onlineContent && `${books[i].title} provides online content`)
}

//THE NULLISH CUALESCING OPERATOR (??)
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ?? console.log(`${books[i].title} provides online content`);

}

//LOCAL ASSIGNMENT OPERATORS
for (let i = 0; i < books.length; i++) {
  const book = books [i];
  book.edition ||= 1; 
  console.log(book.edition);
}

for (let i = 0; i < books.length; i++) {
  const book = books [i];
  if(book.thirdParty.goodreads.rating < 4.2){
    book.highlighted &&= false;
  }
 //book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2)
  console.log(book.highlighted);
}

//LOOPING ARRAYS: THE FOR-OF LOOP
let pageSum = 0;
for(const book of books){
  pageSum+= book.pages;
}
console.log(pageSum);

const allAuthors = [];
// for(const book of books){
//   allAuthors.push(book.author)
// }
// console.log(allAuthors);
for(const book of books){
  if(typeof book.author === 'string')
    allAuthors.push(book.author)
  else{
    for(const author of book.author){
      allAuthors.push(author)
    }
  }
}
console.log(allAuthors);


for(const [i, author] of allAuthors.entries()){
  console.log(i+1+'.', author);
}

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1]
};

console.log(newBook);

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages
}

console.log(newBook2);

//OPTIONAL CHAINING (?.)
function getFirstKeyword(book){
  console.log(book.keywords?.[0] ?? undefined);
}
getFirstKeyword(books[0]);
getFirstKeyword(newBook2); 


//Looping Objects: Object Keys, Values and Entries
const entries = []
console.log(entries);
for(const x of Object.keys(books[0].thirdParty.goodreads)){
  entries.push([x])
}
console.log(entries);

for(const [key,values] of Object.values(books[0].thirdParty.goodreads).entries()){
  entries[key].push(values);
  console.log(values);
}
console.log(entries);


const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);

console.log(entries, entries2)

//SETS
const allKeywords = [];
for(const book of books){
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);
const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
console.log(uniqueKeywords);
uniqueKeywords.delete('business')
console.log(uniqueKeywords);

const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

uniqueKeywords.clear();
console.log(uniqueKeywords);

//MAPS: FUNDAMENTALS
const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);
bookMap.set('pages', 464)
console.log(bookMap);
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
console.log(bookMap.size);
console.log(bookMap.has('author') ? "The author of the book is known": false);
if(bookMap.has('author')) console.log('The author is known');

//MAPS: ITERATION
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

for(const[key,value] of firstBookMap){
  if (typeof value === "number") console.log(key);
}

//WORKING WITH STRINGS - PART 1
console.log(books[0].ISBN['6'])
console.log(books[0].ISBN['4'])
console.log(books[0].ISBN['9'])
console.log(books[0].ISBN['8'])

const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'))
console.log(quote.slice(quote.lastIndexOf(' ')+1));;

const isContributor = function(str){
  if(str.slice(str.lastIndexOf(' ')+1)==='(Contributor)')
    return true;
  else
    return false;
}
console.log(isContributor('Julie Sussman (Contributor)'));
console.log(isContributor('Robert (Contributor) Sedgewick'));

console.log('Julie Sussman (Contributor)'.lastIndexOf('(Contributor)'));
console.log('Robert Sedgewick'.lastIndexOf('(Contributor)'))
console.log('Julie Sussman (Contributor)'.indexOf('(Contributor)'));

function isContributor2(author) {
  return author.lastIndexOf('(Contributor)') !== -1;
}
console.log(isContributor2('Julie Sussman (Contributor)'));
console.log(isContributor2('Robert (Contributor) Sedgewick'));

//WORKING WITH STRINGS - PART 2
const normalizeAuthorName = function(name){
  name = name.trim();
  const firstName = name.slice(0,name.indexOf(' '));
  console.log(firstName);
  const lastName = name.slice(name.indexOf(' ') + 1, name.lastIndexOf(' ') + 1);
  console.log(lastName);
  const capitalizedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  console.log(capitalizedFirstName);
  const capitalizedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase().trim();
  console.log(capitalizedLastName);

  console.log(capitalizedFirstName+' '+capitalizedLastName);
}
normalizeAuthorName('  JuliE sussMan (Contributor)')
normalizeAuthorName('  Gilberto RoGEL Contributor');

const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(books[1].title);
console.log(newBookTitle);


const logBookTheme = function(title){
  title = title.toLowerCase();
  if(title.startsWith('computer')){
    console.log('This book is about computers');
  }else if(title.includes('algorithms') && title.includes('structures')){
    console.log('This books is about algorithms and data structures');
  }else if((title.endsWith('system') || title.endsWith('systems')) && !title.includes('operating')){
    console.log('This book is about some systems, but definitely not abut operating systems');
  }
}


logBookTheme('Data structures and algorithms by cormen');
logBookTheme('Computer algorithms by Gil');
logBookTheme('Big Data systems');

//WORKING WITH STRINGS - PART 3
const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
const logBookCategories = function(books){
  const booksArray = books.split(';');
  console.log(booksArray);
  for (const book of booksArray) {
    console.log(book);
  }
}
logBookCategories(bookCategories);

const getKeywordsAsString = function(books){
  const keywords = [];
  for (const book of books) {
    keywords.push(...book.keywords)
  }
  console.log(keywords);
  const noDuplicates = [...new Set(keywords)]
  console.log(noDuplicates);
  const semiColonKeywords = noDuplicates.join(';')
  console.log(semiColonKeywords);
}
getKeywordsAsString(books);



const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
const logBookChapters = function (bookChapters){
  for (const [book, pages] of bookChapters) {
    console.log(`${book.padEnd(15,'_')+pages}`);
  }
}
logBookChapters(bookChapters);