const MercadoPagoService = require('../containers/mercadoPagoService.js');
const operationMP = require('../containers/operationMP.js');
const paymentInstance = new operationMP(new MercadoPagoService());


class responseController {
    approved(req, res) {
        if (req.query.status == 'approved') {
            res.redirect(`${process.env.URL_CLIENT}/response/success`);
        } else {
            res.send('crearPagina ')
        }
    }

    async pending(req, res) {
        if (req.query.status == 'in_process') {
            await paymentInstance.refund(req.query.collection_id)
            res.redirect(`/response/pendingPayment/${req.query.collection_id}`);
        } else {
            res.send('crearPagina ')
        }
    }

    async failure(req, res) {
        if (req.query.status == 'rejected') {
            await paymentInstance.refund(req.query.collection_id)
            res.redirect(`/response/failurePayment/${req.query.collection_id}`);
        } else {
            res.send('crearPagina ')
        }
    }

    async notificationPayments(req, res){
        let notificationRequest = await paymentInstance.getPayment(req.query.id)
        if(notificationRequest){
            io.sockets.emit('message', { ventas: [{id: notificationRequest}]  })
        }
        res.status(200).send("OK")
    }

    esp(req, res){
        io.sockets.on('messageesp', (messageesp) => {
            console.log(messageesp);
        })
    }
}

module.exports = new responseController