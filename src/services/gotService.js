export default class Service {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    getData = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.statur}`)
        }
        return await res.json()
    }
    
    getAllBooks = async () => {
        const books = await this.getData(`/books/`)
        return books.map(this._transformBook)
    }
    
    getBook = async (id) => {
        const book = await this.getData(`/books/${id}/`)
        return this._transformBook(book)
    }
    
    getAllCharacters = async () => {
        // max 214
        const id = await Math.floor(Math.random() * 215)
        const chars = await this.getData(`/characters?page=${id}`)
        return chars.map(this._transformCharacter)
    }
    
    getCharacter = async (id) => {
        const char = await this.getData(`/characters/${id}`);
        return this._transformCharacter(char)
    }
    
    getAllHouses = async () => {
        const houses = await this.getData(`/houses/`)
        return houses.map(this._transformHouse)
    }
    
    getHouse = async (id) => {
        const  house = await this.getData(`/houses/${id}/`)
        return this._transformHouse(house)
    }
    setInfo(info) {
        return info ? info : 'not indicated'
    }
    _getId = (item) => {
        return item.url.match(/[$\d]+/)[0]
    }
    _transformCharacter = (char) => {
        return {
            id: this._getId(char),
            name: this.setInfo(char.name),
            gender: this.setInfo(char.gender),
            born: this.setInfo(char.born),
            died: this.setInfo(char.died),
            culture: this.setInfo(char.culture),
            url: this.setInfo(char.url)
        }
    }

    _transformHouse = (house) => {
        return {
            id: this._getId(house),
            name: this.setInfo(house.name),
            region: this.setInfo(house.region),
            words: this.setInfo(house.words),
            titles: this.setInfo(house.titles),
            overlord: this.setInfo(house.overlord),
            ancestralWeapons: this.setInfo(house.ancestralWeapons),
        }
    }
    _transformBook = (book) => {
        return {
            id: this._getId(book),
            name: book.name,
            numberOfPages: this.setInfo(book.numberOfPages),
            publiser: this.setInfo(book.publiser),
            released: this.setInfo(book.released),
        }
    }
}