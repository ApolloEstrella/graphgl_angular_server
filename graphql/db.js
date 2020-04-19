const Sequelize = require('sequelize');
var opts = {
    define: {
      host: "localhost",
      port: "3308",
      dialect: "mysql",
      operatorAliases: false,
      freezeTableName: true,
      timestamps: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  };
  
  const sequelize = new Sequelize('mysql://root:javalinux@localhost:3308/public', opts);


// Table
const MovieModel = sequelize.define('movie', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'movie',
    timestamps: false
});
// Synchronize table
//sequelize.sync({
//    force: false,
//})
// Insert dummy data
/* .then(() => MovieModel.create({
    name: 'Star wars',
    score: 4
}))
.then(() => MovieModel.create({
    name: 'Avgengers',
    score: 5
}))
.then(() => MovieModel.create({
    name: 'Cats',
    score: 2
}))
.then(() => MovieModel.create({
    name: 'Tazza',
    score: 3
}))  */

const Movies = sequelize.models.movie;

module.exports = {
    Movies: Movies
}