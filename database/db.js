import {Sequelize} from 'sequelize'

const db = new  Sequelize(
    'database_salida',
    'root',
    'root',
    {
        host:'localhost',
        dialect:'postgres'
    })

export default db;