const express = require('express')
const router = express.Router() // {}
// const authMiddleware = require('../middleware/auth')

// GET method // Read
router.get('/', (req, res, next) => {
    console.log('Home router');
    res.render('index',
        {
            title: 'Index',
            text: 'This is index.js',
            isHome: true,
        })
})


module.exports = router
