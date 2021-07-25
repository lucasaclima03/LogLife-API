module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define('client', {
        client_type: {
            type: Sequelize.STRING
        },
        client_status: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        cpf: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        cep: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        number: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        opening_hour: {
            type: Sequelize.DATE
        },
        day_of_service: {
            type: Sequelize.DATE
        },
        vehicles: {
            type: Sequelize.STRING
        }
    })

    return Client
}