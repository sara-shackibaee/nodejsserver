const express = require('express')
const server1 = express()
const ejs = require('ejs')
server1.set('view engine', 'ejs')
server1.use(express.static('public'))
server1.listen(3000, () => { console.log("server connecting ......") })
server1.get('/sara', (req, res) => {
    res.render('index')
})