/**
 * Created by merlin on 23/01/17.
 */

//Database connection
const workaround = require('pg');
delete workaround.native;
const Sequelize = require('sequelize');
const dblink = new Sequelize('postgres', 'postgres', 'postgres',{
    host: 'db',

    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
});

const requests = [
    "doThings","doOtherThings","testDatabase()",
];

function executeRequest(id) {
    eval(requests[id]);
}

function testDatabase() {
    dblink.authenticate()
        .then(function(err) {
            console.log('Connection has been established successfully.');
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });

}

export default executeRequest;