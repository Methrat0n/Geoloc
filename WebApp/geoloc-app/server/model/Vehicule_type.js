/**
 * Created by thibault on 24/01/17.
 */
var Vehicule_type = sequelize.define('vehicule_type', {
        id_device_type: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        create_date: { type: Sequelize.DATE },
        create_by: { type: Sequelize.STRING(20) },
        change_date: { type: Sequelize.DATE },
        change_by: { type: Sequelize.STRING(20) }
    }
);
