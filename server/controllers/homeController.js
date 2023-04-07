const homeContainer = require('../containers/home/homeContainer.js')

class HomeController {
    async home(req, res) {
        const db = await homeContainer.getDB("DB")
        // let marcas = await homeContainer.getDB("Marcas")
        res.json(db)
    }
}

module.exports = new HomeController