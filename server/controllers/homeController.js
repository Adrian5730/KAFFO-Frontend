const { getDB } = require('../containers/home/homeContainer.js')

class HomeController {
    async home(req, res) {
        const products = await getDB()
        res.json(products)
    }
}

module.exports = new HomeController