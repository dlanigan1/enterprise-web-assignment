
const books = [
    {
      "title": "The Wind In the Willows",
      "author": "Kenneth Grahame",
      "genre": "Childrens",
      "summary": "A childrens novel by Kenneth Grahame, first published in 1908. The novel is notable for its mixture of mysticism, adventure, morality and camaraderie, and celebrated for its evocation of the nature of the Thames Valley",
      "status": "available"
    },
    {
      "title": "Stalingrad",
      "author": "Antony Beevor",
      "genre": "Military History",
      "summary": "Stalingrad is a narrative history written by Antony Beevor of the battle fought in and around the city of Stalingrad during World War II",
      "status": "available"
    },
    {
      "title": "The Satanic Verses",
      "author": "Salman Rushdie",
      "genre": "Fiction",
      "summary": "The Satanic Verses is Salman Rushdies fourth novel, first published in 1988 and inspired in part by the life of Muhammad",
      "status": "available"
    },
    {
      "title": "Almost the Perfect Murder",
      "author": "Paul Williams",
      "genre": "Crime",
      "summary": "An examination into the murder of Elaine O Hara and the subsequent trial of Graham Dywer",
      "status": "available"
    },
    {
      "title": "The Second World War",
      "author": "Antony Beevor",
      "genre": "Military History",
      "summary": "The Second World War is a narrative history of World War II by British historian Antony Beevor",
      "status": "available"
    },
    {
      "title": "Circle of Friends",
      "author": "Maeve Binchy",
      "genre": "Fiction",
      "summary": "Circle of Friends is a novel written in 1990 by Maeve Binchy. It is set in Dublin, as well as the fictitious town of Knockglen in rural Ireland during the 1950s",
      "status": "available"
    },
    {
      "title": "Tara Road",
      "author": "Maeve Binchy",
      "genre": "Fiction",
      "summary": "Tara Road is a novel by Maeve Binchy. It was chosen as an Oprahs Book Club selection in September 1999.",
      "status": "available"
    },
    {
      "title": "A Week in Winter",
      "author": "Maeve Binchy",
      "genre": "Fiction",
      "summary": "A Week in Winter is a novel by Maeve Binchy. It was published posthumously in 2012",
      "status": "available"
    },
    {
      "title": "Badfellas",
      "author": "Paul Williams",
      "genre": "Crime",
      "summary": "Offers an account of how organized crime evolved in Ireland over the decades.",
      "status": "available"
    },
    {
      "title": "The Magic Faraway Tree",
      "author": "Enid Blyton",
      "genre": "Childrens",
      "summary": "The Magic Faraway Tree is a childrens novel by Enid Blyton, first published in 1943.",
      "status": "available"
    },
];

const statusTypes = [
  {
    "statustype": "available"
  },
  {
    "statustype": "unavailable"
  }
];

const genreTypes = [
  {
    "genretype": "Crime"
  },
  {
    "genretype": "Childrens"
  },
  {
    "genretype": "Military History"
  },
  {
    "genretype": "Fiction"
  }
];

const borrowedBooks = [
    {
      "title": "The Wind In the Willows",
      "available": 1,
      "unavailable": 0,
    },
    {
      "title": "Stalingrad",
      "available": 1,
      "unavailable": 0,
    },
    {
      "title": "The Satanic Verses",
      "available": 1,
      "unavailable": 0,
    },
    {
      "title": "Almost the Perfect Murder",
      "available": 1,
      "unavailable": 0,
    },
    {
      "title": "The Second World War",
      "available": 1,
      "unavailable": 0,
    },
    {
      "title": "Circle of Friends",
      "available": 1,
      "unavailable": 0,
    },
    {
      "title": "Tara Road",
      "available": 1,
      "unavailable": 0,
    },
    {
      "title": "A Week in Winter",
      "available": 1,
      "unavailable": 0,
    },
    {
      "title": "Badfellas",
      "available": 1,
      "unavailable": 0,
    },
    {
      "title": "The Magic Faraway Tree",
      "available": 1,
      "unavailable": 0,
    },
];

module.exports = {books,statusTypes,genreTypes, borrowedBooks};
