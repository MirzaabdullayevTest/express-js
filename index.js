const express = require('express')
const app = express()
const path = require('path')

// GET method
app.get('/', (req, res) => {
    // console.log(req.url);
    res.sendFile(path.join(__dirname, 'views', 'index.html'), (err) => {
        if (err) {
            console.log(err);
        }
    })
})

app.get('/api/books', (req, res) => {
    // console.log(req.url);
    res.write('<h1>Some books', (err) => {
        if (err) {
            console.log(err);
        }
    })

    res.end()
})

try {
    app.listen(3000, () => {
        console.log('Server working on port', 3000);
    })
} catch (error) {
    console.error(error);
}