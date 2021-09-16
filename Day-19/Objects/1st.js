
function readingStatus(books){
    for (let items of books) {
        if (items.haveRead) {
            console.log(`${items.author} has read ${items.title} book`)
        } else {
            console.log(`${items.author} hasn't read ${items.title} book yet`)
        }
    }
}

var Books = [ 
{
    author: 'Bill',
    title: 'The Road Ahead',
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10)
},
{
    author: 'Steve',
    title: 'Walter Isaacson',
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5)
},
{
    author: 'Jhon',
    title:  'The Hunger Games', 
    haveRead: false,
    dateOfRead: NaN
}];

readingStatus(Books);