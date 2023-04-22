const { GoogleSpreadsheet } = require('google-spreadsheet');
let KEYFILEPATH = require('./credentials.json');

let serviceGoogle = {
    accederGoogle: async function (idDocumento, tituloSolapa) {
        const documento = new GoogleSpreadsheet(idDocumento)
        await documento.useServiceAccountAuth(KEYFILEPATH)
        await documento.loadInfo();
        const sheet = documento.sheetsByTitle[tituloSolapa];
        return sheet
    },

    database: async function (idDocumento, idSolapa) {
        const sheet = await this.accederGoogle(idDocumento, idSolapa)
        const rows = await sheet.getRows();
        const registros = rows.map(row => {
            return {
                id: row.ID,
                nombre: row.Nombre,
                descripcion: row.Descripcion,
                notas: row.Notas,
                intensidad: row.Intensidad,
                marca: row.Marca,
                origen: row.Origen,
                variedad: row.Variedad,
                'altura [m]': row['Altura [m]'],
                precio: row['Precio [unidad]'],
                img: row.IMG,
                stock: row.Stock
            };
        });
        return registros
    },

    insertVentas: async function (idDocumento, tituloSolapa, venta) {
        console.log(tituloSolapa)
        const sheet = await this.accederGoogle(idDocumento, tituloSolapa)
        await sheet.addRow(venta);
        await sheet.saveUpdatedCells();
    }
}

module.exports = serviceGoogle;