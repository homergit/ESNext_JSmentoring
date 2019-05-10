export class Book {
    constructor(character = {name: 'Default', age: 0}) {
        const {name, age} = character;
        this.name = name;
        this.age = age;
        this.elem = document.getElementById('book')
    }

    getStory() {
        return this._createStory().join(' ');
    }

    readStory() {
        this.elem.innerHTML = '<hr><h5>Book:</h5>';

        for (let line of this._createStory()) {
            this._readLine(line);
        }
    }

    _createStory() {
        return [
            `Hi, my name is ${this.name},`,
            `I am ${this.age} years old,`,
            `qwerty,`,
            `qwerty!`,
        ];
    }

    _readLine(line) {
        const content = `<p>${line}</p>`;

        this.elem.innerHTML += content;
    }

}
