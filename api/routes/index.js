const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute.js')
const niveis = require('./niveisRoute.js')
const turmas = require('./turmaRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    pessoas,
    niveis,
    turmas
  )
}