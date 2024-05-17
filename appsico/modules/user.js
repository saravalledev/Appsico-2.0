const Sequelize = require('sequelize');
const database = require('../db');

const User = database.define('user', {
    id_user: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name_user: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    date_birth_user: {
        type: Sequelize.DATE,
        allowNull: false
    },

    biography_user: {
        type: Sequelize.STRING(500),
        allowNull: false
    },

    contact_user: {
        type: Sequelize.STRING(15),
        allowNull: false
    },

    email_user: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    password_user: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
})

module.exports = User;