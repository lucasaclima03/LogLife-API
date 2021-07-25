const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// ------- DATABASE -------
const db = require('./models/index')

db.sequelize.sync()

// - WARNING!!!!! Lines above drop the database and start over
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.")
// })


// ------- IMPORTING ROUTES -------
const routeUsers = require('./routes/users-router')
const routeClients = require('./routes/clients-routes')

app.use(morgan('dev'))
app.use(express.urlencoded({extend: false}))
app.use(express.json())
app.use(cors())

// ------- REGISTERING ROUTES -------
app.use('/users', routeUsers)
app.use('/clients', routeClients)

app.use((req, res, next) => {
    return res.status(200).send({
        mensagem: "Rota não encontrada"
    })
})

module.exports = app