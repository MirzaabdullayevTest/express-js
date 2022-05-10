const express = require('express')
const app = express()
// const path = require('path')

app.use(express.json()) // json // requestlar uchun

const books = [
    { name: 'Atomic habits', year: 2000, id: 1 },
    { name: 'Harry potter', year: 2008, id: 2 },
    { name: 'Rich dad and poor dad', year: 2010, id: 3 },
]

// GET method
app.get('/', (req, res) => {
    // console.log(req.url);
    // res.sendFile(path.join(__dirname, 'views', 'index.html'), (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    // })
    res.send('Bu asosiy sahifa')
})

app.get('/api/books', (req, res) => {
    // console.log(req.url);
    // res.write('<h1>Some books', (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    // })
    // res.end()

    res.send(JSON.stringify(books))
})

// Get request with query
app.get('/api/books/sort', (req, res) => {
    const book = books.find((book) => req.query.name === book.name)
    if (book) {
        // Clientga chiqariladi
        res.status(200).send(book)
    } else {
        res.status(400).send('Bu ismli kitob mavjud emas...')
    }
})

// Get request with params
app.get('/api/books/:id', (req, res) => {
    // console.log(req.params.id);

    // Parametr aniqlanadi
    const id = +req.params.id
    // Parametrni tekshirish kerak
    // Bazadan qidiriladi parametr bo'yicha
    const book = books.find((book) => book.id === id)
    if (book) {
        // Clientga chiqariladi
        res.status(200).send(book)
    } else {
        res.status(400).send('Bu parametrli kitob mavjud emas...')
    }

})

// POST request
app.post('/api/books/add', (req, res) => {
    // Baza chaqiramiz
    let allBooks = books  // []

    // Validatsiya // hiyalaymiz
    if (req.body.name.length < 3) {
        res.status(400).send('Kitobni min harf uzunligi 3 ta bo\'lishi kerak')
        return
    }

    if (!req.body.name) {
        res.status(400).send('Name bo`sh bo`lmasligi kerak!')
        return
    }

    if (!req.body.year) {
        res.status(400).send('Year bo`sh bo`lmasligi kerak!')
        return
    }

    // Obyektni yaratamiz yangi kitobni
    let book = {
        id: books.length + 1,
        name: req.body.name,
        year: req.body.year
    }
    // bazaga qo'shamiz
    allBooks.push(book)

    // kitoblarni klientga qaytaramiz
    res.status(201).send(allBooks)

})

try {
    const port = process.env.port || 5000

    app.listen(port, () => {
        console.log('Server working on port', port);
    })

} catch (error) {
    console.error(error);
}

// 1 guruh oline shop // oziq ovqat // categories / c r
// 2 guruh oline darsliklar sayti // darsliklar sayti // categories / c r