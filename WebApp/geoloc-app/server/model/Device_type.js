/**
 * Created by thibault on 24/01/17.
 */
var Device_type = sequelize.define('device_type', {
        id_device_type: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        create_date: { type: Sequelize.DATE },
        create_by: { type: Sequelize.STRING(20) },
        change_date: { type: Sequelize.DATE },
        change_by: { type: Sequelize.STRING(20) }
    }
);
