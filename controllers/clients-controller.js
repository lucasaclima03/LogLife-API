const db = require('../models')

const Client = db.clients

exports.create = (req, res) => {
    const client = {
        client_type: req.body.client_type,
        client_status: req.body.client_status,
        name: req.body.name,
        last_name: req.body.last_name,
        cpf: req.body.cpf,
        email: req.body.email,
        phone: req.body.phone,
        cep: req.body.cep,
        address: req.body.address,
        number: req.body.number,
        city: req.body.city,
        state: req.body.state,
        opening_hour: req.body.opening_hour,
        day_of_service: req.body.day_of_service,
        vehicles: req.body.vehicles,
    }

    Client.create(client)
        .then(data => {
            return res.status(201).send({
                message: "Client created!",
                client: data
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.getAll = (req, res) => {
    Client.findAll()
        .then(data => {
            return res.status(200).send(data)
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}


exports.find = (req, res) => {
    Client.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(client => {
            return res.status(200).send({
                message: "I found this one",
                client: client
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.update = (req, res) => {
    const id_client = req.body.id

    const client = {
        id: id_client,
        client_type: req.body.client_type,
        client_status: req.body.client_status,
        name: req.body.name,
        last_name: req.body.last_name,
        cpf: req.body.cpf,
        email: req.body.email,
        phone: req.body.phone,
        cep: req.body.cep,
        address: req.body.address,
        number: req.body.number,
        city: req.body.city,
        state: req.body.state,
        opening_hour: req.body.opening_hour,
        day_of_service: req.body.day_of_service,
        vehicles: req.body.vehicles,
    }

    Client.update(client, {
        where: {
            id: id_client
        }
    })
        .then(status => {
            if (status == 1) {
                return res.status(202).send({
                    message: "Updated sucessfully!"
                })
            } else {
                return res.status(202).send({
                    message: "Cannot update"
                })
            }
        })
        .catch(err => {
            return res.status(500).send({
                messagem: "Internal error: " + err.message
            })
        })
}

exports.delete = (req, res) => {
    Client.findByPk(req.body.id)
        .then(data => {
            data.destroy()
        })
        .then(id => {
            return res.status(202).send({
                message: "Deleted",
                data: id
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: "Internal sever error: " + err.message
            })
        })
}