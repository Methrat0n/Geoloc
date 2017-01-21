/**
 * Created by merlin on 21/01/17.
 */
let Sequelize = require('sequelize');
let dblink = new Sequelize('geoloc', 'chmoduplusr', 'chmoduplusr'{
    host: 'db',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
});

export default dblink;