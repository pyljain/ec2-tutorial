const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.end('Hello')
})

app.listen(process.env.PORT || 8080, () => console.log('Server Ready'))
