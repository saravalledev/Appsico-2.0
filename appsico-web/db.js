const Sequelize = require('sequelize');
const sequelize = new Sequelize('dbappsico', 'root', 'appsico', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

module.exports = sequelize;

/*
Sequelize('crud, 'root', 'appsico'{
          'nome do db', 'user', 'senha'
}) 
*/