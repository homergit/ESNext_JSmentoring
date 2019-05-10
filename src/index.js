import XmlHttpService from './xml-http-service.js';
import {Book} from './Book.js';
import {Bookshelf} from "./Bookshelf.js";

const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const putBtn = document.getElementById('put');
const deleteBtn = document.getElementById('delete');
const asyncBtn = document.getElementById('async');
const readBook = document.getElementById('readBook');
const addBook = document.getElementById('addBook');
const readBooks = document.getElementById('readBooks');
const bookElem = document.getElementById('book');

const name = 'Bohdan';
const age = 23;
const book = new Book({name, age});
const shelf = new Bookshelf([book]);

getBtn.addEventListener('click', () => {
    XmlHttpService.get('https://swapi.co/api/people/1/')
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
});

postBtn.addEventListener('click', () => {
    XmlHttpService.post('https://jsonplaceholder.typicode.com/posts', {data: 'data'});
});

putBtn.addEventListener('click', () => {
    XmlHttpService.put('https://jsonplaceholder.typicode.com/posts/1', {data: 'data'});
});

deleteBtn.addEventListener('click', () => {
    ['https://jsonplaceholder.typicode.com/posts/1'].map(XmlHttpService.delete);
});

asyncBtn.addEventListener('click', async () => {
    const film = await fetchData('https://swapi.co/api/films/1/');
    const characters = await Promise.all(film.characters.map(fetchData));

    console.table(characters);
});

async function fetchData(url) {
    const result = await fetch(url);
    return result.json();
}

readBook.addEventListener('click', () => {
    book.readStory()
});

addBook.addEventListener('click', () => {
    shelf.addBook(new Book({name: 'ivan', age: 36}));
});

readBooks.addEventListener('click', () => {
    const booksAmount = shelf.getLength();
    const generator = shelf.readBooks();
    let booksFromShell = '';

    if (booksAmount) {
        for (let i = 0; i < booksAmount; i++) {
            booksFromShell += `<p>${generator.next().value}</p>`;
        }

        bookElem.innerHTML = booksFromShell;
    } else {
        bookElem.innerHTML = '<p> sorry, you have not enough books to display </p>' +
            '<p> try to add some books</p>';
    }
});
