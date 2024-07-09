// Пример сложных типов данных

const book = {
    title: 'Lord of the Rings',
    author: 'Tolkien',
    isForKids: false,
    characters: ['Aragorn', 'Legolas', 'Ghimli', 'Frodo']
}

// console.log(book.characters);

// задача: получить данные из объекта по ключам и положить их в переменные для дальнейшего использоваия

// const title = book.title
// const author = book.author
// const isForKids = book.isForKids
// const characters = book.characters

// console.log(title, auhor,isForKids, characters);

// * деструктуризация объектов решает ту же задачу, но в одну строку

const {title, auhor,isForKids, characters} = book
console.log(title, auhor,isForKids, characters);