const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.use(express.json());

const usersRouter = require('./routes/users')
app.use(usersRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(400).send('Something broke!')
})

app.listen(port, () => {
  console.log('app is listening on:', port)
})