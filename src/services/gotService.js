export default class Service {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    getData = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.statur}`)
        }
        return await res.json()
    }
    
    async getAllBooks() {
        const books = await this.getData(`/books/`)
        return books.map(this._transformBook)
    }
    
    async getBook(id) {
        const book = await this.getData(`/books/${id}/`)
        return this._transformBook(book)
    }
    
    async getAllCharacters() {
        const chars = await this.getData(`/characters?page=5&pageSize=10`)
        return chars.map(this._transformCharacter)
    }
    
    async getCharacter (id) {
        const char = await this.getData(`/characters/${id}`);
        return this._transformCharacter(char)
    }
    
    async getAllHouses() {
        const houses = await this.getData(`/houses/`)
        return houses.map(this._transformHouse)
    }
    
    async getHouse(id) {
        const  house = await this.getData(`/houses/${id}/`)
        return this._transformHouse(house)
    }

    _transformCharacter(char) {
        return {
            name: char.name || 'not indicated',
            gender: char.gender || 'not indicated',
            born: char.born || 'not indicated',
            died: char.died || 'not indicated',
            culture: char.culture || 'not indicated'
        }
    }

    _transformHouse(house) {
        return {
            name: house.name || 'not indicated',
            region: house.region || 'not indicated',
            words: house.words || 'not indicated',
            titles: house.titles || 'not indicated',
            overlord: house.overlord || 'not indicated',
            ancestralWeapons: house.ancestralWeapons || 'not indicated',
        }
    }
    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages || 'not indicated',
            publiser: book.publiser || 'not indicated',
            released: book.released || 'not indicated',
        }
    }
}