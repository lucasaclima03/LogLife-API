const express = require('express')
const router = express.Router()

const login = require('../middlewares/login')

const ClientsController = require('../controllers/clients-controller')

router.get('/', login.login, ClientsController.getAll)
router.get('/:id', login.login, ClientsController.find)
router.post('/', login.login, ClientsController.create)
router.patch('/', login.login, ClientsController.update)
router.delete('/', login.login, ClientsController.delete)

module.exports = router