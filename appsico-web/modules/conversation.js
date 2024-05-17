const Sequelize = require('sequelize');
const database = require('../db');

const Conversation = database.define('conversation', {
    id_conversation: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_professional: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        foreignKey: true,
    },
    id_user: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        foreignKey: true,
    },
})

module.exports = Conversation;