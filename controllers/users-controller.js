const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = db.users

exports.signUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (errBcrypt, hash) => {
        if (errBcrypt) {
            return res.status(500).send({
                erro: "Bcrypte sate: " + errBcrypt
            })
        }

        const user = {
            email: req.body.email,
            password: hash
        }

        User.create(user)
            .then(data => {
                res.status(201).send({
                    message: "User created",
                    user: {
                        email: data.email
                    }
                })
            })
            .catch(err => {
                res.status(500).send({
                    message: "Erro saving user: " + err
                })
            })
    })
}

exports.signIn = (req, res, next) => {
    const user = User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (user === null) {
                return res.status(400).send({
                    message: "Auth error"
                })
            }

            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).send({
                        message: "Auth error",
                        error: err
                    })
                }

                if (result) {
                    const token = jwt.sign({
                        email: user.email
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    })

                    return res.status(200).send({
                        message: "Welcome!",
                        user: {
                            email: user.email
                        },
                        token: token
                    })
                }
                return res.status(401).send({
                    message: "Falha na autenticação"
                })
            })
        })
        .catch(err => {
            return res.status(401).send({
                message: "Failed to search for user",
                erro: err
            })
        })
}
