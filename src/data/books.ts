

export type LibraryBook = {
  id: number;
  title: string;
  author: string;
};

export type BorrowedBook = {
  id: number;
  title: string;
  author: string;
  borrowDate: string;
  dueDate: string;
};

export type ReturnedBook = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  returnDate: string;
};

export const libraryBooks: LibraryBook[] = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
  { id: 4, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
  { id: 5, title: "The Girl in Snow", author: "Sandara Lunata" },
];

export const borrowedBooks: BorrowedBook[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    borrowDate: "2023-10-01",
    dueDate: "2023-10-25",
  },
];

export const returnedBooks: ReturnedBook[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0-7432-7356-5",
    returnDate: "2023-10-15",
  },
];

