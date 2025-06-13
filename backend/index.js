const express = require('express')

const app = express()



app.get('/', (req, res) => {
    res.send('hyyyy')
})

app.listen(3000, (res) => {
    console.log('Server is running 3000')
})