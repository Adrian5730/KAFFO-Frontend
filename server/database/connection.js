const mysql = require("mysql2/promise")
const connection = async (query, values) => {
    const pool = mysql.createPool({
        host: process.env.DB_HOSTNAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_REFERENCE,
        port: process.env.DB_PORT
    })
    const connection = await pool.getConnection()
    try {
        console.log('Conexión a la base de datos MySQL establecida.')
        const [rows] = await connection.execute(query, values)
        return rows
    } catch (error) {
        console.log(`Error en la consulta: ${error.message}`)
        return []
    } finally {
        connection.release()
        console.log('Conexión a la base de datos MySQL cerrada.')
    }
}

module.exports = {
    connection
}