/**
 * Created by thibault on 24/01/17.
 */
var Device = sequelize.define('device', {
        id_device: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        create_date: { type: Sequelize.DATE },
        create_by: { type: Sequelize.STRING(20) },
        change_date: { type: Sequelize.DATE },
        change_by: { type: Sequelize.STRING(20) }

    }
);

//  id_device_type INTEGER REFERENCES device_type (id_device_type),