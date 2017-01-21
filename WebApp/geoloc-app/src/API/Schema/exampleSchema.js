/**
 * Created by merlin on 21/01/17.
 */
import dblink from '../Database';

let Sequelize = require('sequelize');

//Docs http://docs.sequelizejs.com/en/v3/docs/getting-started/

//Will be class so use capital
let Example = dblink.define('user', {
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

Example.sync({force: true}).then(function () {
    // Table created
    return Example.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});