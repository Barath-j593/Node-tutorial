const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')
const logger = require('./middlewares/middle');
// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
app.use(logger)
app.use('/api/people', people)
app.use('/api/auth', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
