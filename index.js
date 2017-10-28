const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.end('Hello from Ubuntu')
})

app.listen(process.env.PORT || 8080, () => console.log('Server Ready'))
