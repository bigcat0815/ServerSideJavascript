const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.get('/route', (req, res) => {
    res.send('Hello Router, <img src="/logo512.png">')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})