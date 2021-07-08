const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

app.get('/', function(req, res, next) {
  res.render('index',{
    title: "Meu primeiro servidor Express",
    version: "0.0.0"
  })
})

app.get('/curriculo', function(req, res, next) {
  res.render('curriculo')
})

app.listen(port, err =>{
console.log(`Server is listening on ${port}`)
})