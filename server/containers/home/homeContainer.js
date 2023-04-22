const { connection } = require('../../database/connection.js')
// let serviceGoogle = require('../../db/serviceGoogle.js')
// const idDocumento = "1TpzLtlRYdQObWMl11QxjSBvCSV9gLvePNB21-F5UNfA"

class HomeContainer {

    async getDB(){
        const query = "select * from products"
        let db = await connection(query, [])
        return db
    }

    dataModel(db){
        let datos = []
        db.forEach(data => {
            datos.push({id: data.ID, nombre: data.Nombre, descripcion: data.Descripcion})
        });
        return datos
    }
}

module.exports = new HomeContainer