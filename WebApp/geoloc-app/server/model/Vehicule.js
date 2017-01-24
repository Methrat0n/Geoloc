/**
 * Created by thibault on 24/01/17.
 */
var Vehicule = sequelize.define('vehicule', {
        id_vehicule: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fingerprint: {
            type: Sequelize.STRING(20)
        },
        create_date: { type: Sequelize.DATE },
        create_by: { type: Sequelize.STRING(20) },
        change_date: { type: Sequelize.DATE },
        change_by: { type: Sequelize.STRING(20) }
    }
);

/*id_vehicule_type INTEGER REFERENCES vehicule_type (id_vehicule_type),*/