const Sequelize = require('sequelize');
const database = require('../db');

const Professional = database.define('professional', {
    id_professional: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name_professional: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    biography_professional: {
        type: Sequelize.STRING(500),
        allowNull: true
    },
    contact_professional: {
        type: Sequelize.STRING(15),
        allowNull: false
    },

    crp_professional: {
        type: Sequelize.STRING(10),
        allowNull: true
    },

    email_professional: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    specialty_professional: {
        type: Sequelize.STRING(15),
        allowNull: true
    },

    password_professional: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    type_service_professional: {
        type: Sequelize.STRING(15),
        allowNull: true
    },

    date_birth_professional: {
        type: Sequelize.DATE,
        allowNull: true
    },
})

module.exports = Professional;