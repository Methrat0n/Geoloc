/**
 * Created by thibault on 24/01/17.
 */
var Signal = sequelize.define('signal', {
    id_signal: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    record_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    gps_localisation_latitude: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gps_localisation_longitude: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    signal_distance: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    signal_volume: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    create_date: { type: Sequelize.DATE },
    create_by: { type: Sequelize.STRING(20) },
    change_date: { type: Sequelize.DATE },
    change_by: { type: Sequelize.STRING(20) }

    }
);

/*
id_device: { INTEGER REFERENCES device (id_device) NOT NULL,},
id_vehicule: { INTEGER REFERENCES vehicule(id_vehicule),},*/