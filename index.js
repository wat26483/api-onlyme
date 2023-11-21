const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const DB = require('./Model/DB')
const { PORT, DATABASE_URL } = process.env


app.use(cors())

mongoose.connect(DATABASE_URL).then(() => {
    console.log('Database success coneting...');
},
    error => {
        console.log('Not connect' + error)
    }
)

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/data', (req, res) => {
    DB.find()
        .then(data => {
            res.json(data)
            console.log("success")
        })
        .catch(err => res.status(400).json({ error: 'Not found' }))
})