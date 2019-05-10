export class Bookshelf {
    constructor(books = []) {
        this.shelf = books;
    }

    addBook(book) {
        this.shelf.push(book);
    }

    getLength() {
        return this.shelf.length;
    }

    * readBooks() {
        for (let book of this.shelf) {
            yield book.getStory();
        }
    }
}
