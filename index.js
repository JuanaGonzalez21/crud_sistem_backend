import express from "express"
import cors from 'cors'

//importacion de la base de datos
import db from "./database/db.js"
import formRoutes from './routes/routes.js'

//var port = process.env.PORT || 8000;
const app = express()

app.use( cors())
app.use(express.json())
app.use('/forms', formRoutes)

try {
    await db.authenticate()
    console.log('Conexion correcta')
} catch (error) {
    console.log(`Error: ${error}`)
}

app.get('/',(req, res)=> {
    res.send('Hola Mundo')
})

app.listen(process.env.PORT || 8001,()=>{
    console.log('Server UP running in http://localhost:8001/ or', process.env.PORT)
})