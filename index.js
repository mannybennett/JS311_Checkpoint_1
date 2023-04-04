const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.use(express.json());

const usersRouter = require('./routes/users')
app.use(usersRouter)

app.listen(port, () => {
  console.log('app is listening on:', port)
})