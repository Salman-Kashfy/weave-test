const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/api/users', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        res.json(response.data)
    }catch (e) {
        console.log(e)
        res.status(500).send('Something went wrong.')
    }
})

app.get('/api/search', async (req, res) => {
    try {
        const q = req.query.q || ''
        const response = await axios.get('https://jsonplaceholder.typicode.com/users?q='+q)
        res.json(response.data)
    }catch (e) {
        console.log(e)
        res.status(500).send('Something went wrong.')
    }
})

app.listen(port, () => {
    console.log('Server started on port '+port)
})