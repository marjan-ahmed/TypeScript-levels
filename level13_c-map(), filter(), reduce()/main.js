"use strict";
let books = [
    {
        book: "geographical Region",
        published: 2003
    },
    {
        book: "Mythology",
        published: 1990
    },
    {
        book: "Fantasy",
        published: 1985
    },
    {
        book: "Historical Fiction",
        published: 2005
    }
];
let latestBooks = books.filter((book) => book.published > 2000);
// console.log(latestBooks);
let changingBookName = books.map((book) => {
    return book.book + 1;
});
// console.log(changingBookName);
let howOldBooks = books.reduce((old, book) => {
    return 2024 - book.published; // assume that year is 2024
}, 0);
// console.log(howOldBooks);
