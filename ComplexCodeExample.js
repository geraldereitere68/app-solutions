/*
Filename: ComplexCodeExample.js

This code is a complex example that simulates a virtual library system. It manages books, authors, and library members. It includes features for searching books, checking out books, returning books, adding new books, adding new authors, and registering new members.

Disclaimer: This is a simplified simulation and not meant to be a real-world implementation. Certain details have been omitted for brevity.

*/

// Book class represents a book in the library system
class Book {
  constructor(title, author, genre, publicationYear) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publicationYear = publicationYear;
    this.isCheckedOut = false;
    this.checkedOutBy = null;
  }

  checkOut(member) {
    if (this.isCheckedOut) {
      console.log("This book is already checked out.");
    } else {
      this.isCheckedOut = true;
      this.checkedOutBy = member;
      console.log(`Book "${this.title}" checked out successfully by ${member.name}.`);
    }
  }

  returnBook() {
    if (this.isCheckedOut) {
      this.isCheckedOut = false;
      this.checkedOutBy = null;
      console.log(`Book "${this.title}" returned successfully.`);
    } else {
      console.log("This book is already in the library.");
    }
  }
}

// Author class represents an author in the library system
class Author {
  constructor(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }
}

// Member class represents a library member
class Member {
  constructor(name, membershipNumber) {
    this.name = name;
    this.membershipNumber = membershipNumber;
  }
}

// Library class represents the library system
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.authors = [];
    this.members = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Book "${book.title}" added to the library.`);
  }

  addAuthor(author) {
    this.authors.push(author);
    console.log(`Author "${author.name}" added to the library.`);
  }

  registerMember(member) {
    this.members.push(member);
    console.log(`Member "${member.name}" registered successfully.`);
  }

  searchBooksByTitle(title) {
    const matchingBooks = this.books.filter((book) => book.title.includes(title));
    console.log(`Books matching the title "${title}":`);
    matchingBooks.forEach((book) => console.log(`- ${book.title} by ${book.author}`));
  }

  searchBooksByAuthor(authorName) {
    const matchingBooks = this.books.filter((book) => book.author.name.includes(authorName));
    console.log(`Books written by "${authorName}":`);
    matchingBooks.forEach((book) => console.log(`- ${book.title}`));
  }

  checkoutBook(bookTitle, memberName) {
    const book = this.books.find((book) => book.title === bookTitle);
    const member = this.members.find((member) => member.name === memberName);
    
    if (book && member) {
      book.checkOut(member);
    } else {
      console.log("Could not find the specified book or member in the library system.");
    }
  }

  returnBook(bookTitle) {
    const book = this.books.find((book) => book.title === bookTitle);
    
    if (book) {
      book.returnBook();
    } else {
      console.log("Could not find the specified book in the library system.");
    }
  }
}

// Creating library instance
const library = new Library("Awesome Library");

// Adding authors and books to the library
const author1 = new Author("John Doe", 1975, "USA");
const author2 = new Author("Jane Smith", 1982, "UK");

const book1 = new Book("The Great Book", author1, "Fiction", 1999);
const book2 = new Book("The Amazing Story", author2, "Non-fiction", 2005);

author1.addBook(book1);
author2.addBook(book2);

library.addAuthor(author1);
library.addAuthor(author2);

library.addBook(book1);
library.addBook(book2);

// Registering library members
const member1 = new Member("Alice", 1001);
const member2 = new Member("Bob", 1002);

library.registerMember(member1);
library.registerMember(member2);

// Searching for books
library.searchBooksByTitle("Great");
library.searchBooksByAuthor("John Doe");

// Checking out books
library.checkoutBook("The Great Book", "Alice");
library.checkoutBook("The Amazing Story", "Bob");

// Returning books
library.returnBook("The Great Book");
library.returnBook("The Amazing Story");