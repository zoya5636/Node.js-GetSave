const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000
const host = "192.168.1.120"

//app.use(express.static('public'))

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
    res.sendFile("/home/admin/code/FirstProject/index.html")
})

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})

