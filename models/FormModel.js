// conexion base de datos

import db from "../database/db.js";

import { DataTypes  } from "sequelize";

const FormModel = db.define('datos_agente',{
    // Cuando se usa sequilize, no se genera un campo id como llave primaria,
    // sequalize lo hace por defecto. Si la agregas generar errores de insercion.
    n_consecutivo : {type: DataTypes.STRING},
    consecutivo : {type: DataTypes.INTEGER},
    agente_envia : {type: DataTypes.STRING},
    area_envia : {type: DataTypes.STRING}
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: "datos_agente"
});

// La linea de abajo crear y actualiza la tabla -- NO BORRAR
FormModel.sync();

export default FormModel;