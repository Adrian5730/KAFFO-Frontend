const MercadoPagoService = require('../containers/mercadoPagoService')
const OperationMP = require('../containers/operationMP')
const paymentInstance = new OperationMP(new MercadoPagoService());
class serviceController {

    async getPaymentLink(req, res) {
        let ordernJSON = JSON.stringify(req.body)
        const linkPaymentMP = await paymentInstance.PaymentLink(JSON.parse(ordernJSON));
        res.json({linkPaymentMP})
    }

    async getSubscriptionLink(req, res) {
        const linkPaymentSubscriptionMP = await paymentInstance.SubscriptionLink();
        res.redirect(linkPaymentSubscriptionMP);
    }
}

module.exports = new serviceController;