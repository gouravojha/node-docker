const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Dhruv , Deepak and Vikrant Sir'))

app.get('/data', (req, res) => res.json({
  "name" : "App is working Fine !!!"
}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
