const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000

//app.use(express.static('directory'))

app.get('/get', (req, res) => {
    fs.readFile('data.txt', function(err, data) {
        if (err) {
            res.sendStatus(404)
            console.error(err)
            return
        }
        res.set('Content-Type', 'text/plain')
        res.status(200)
        res.send(data)
    })
})

app.get('/set', (req, res) => {
    console.log(req.query)
    fs.writeFile("data.txt", req.query.data, (err) => {
        if (err) {
            res.sendStatus(404)
            console.error(err)
            return
        }
        res.sendStatus(200)
    });
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log(`GetSave listening at ${port}`)
})
