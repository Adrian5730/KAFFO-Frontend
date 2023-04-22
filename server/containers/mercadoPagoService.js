const axios = require("axios");
let mercadopago = require('mercadopago');
let connectionDB = require('../database/connection.js')
class MercadoPagoService {

    async createPaymentLink(orden) {
        let items = [];
        orden.forEach(item => {
            items.push({
                title: item.title,
                quantity: Number(item.quantity),
                currency_id: 'ARS',
                unit_price: Number(item.unit_price)
            })
        });

        mercadopago.configure({
            access_token: process.env.ACCESS_TOKEN
        });
        let preference = {
            items: items,
            payment_methods: {
                installments: 1

            },
            dependencies: {
                implementation: 'com.mercadopago.android.px:checkout:4.+'
            },

            back_urls: {
                failure: "/localhost:5050/response/failure",
                pending: "/localhost:5050/response/pending",
                success: "/localhost:5050/response/success"
            },

            auto_return: "approved"
        };
        let response = await mercadopago.preferences.create(preference);
        return response.body.init_point
    }


    async createSubscriptionLink() {
        const url = "https://api.mercadopago.com/preapproval";
        const body = {
            reason: "Suscripción de ejemplo",
            auto_recurring: {
                frequency: 1,
                frequency_type: "months",
                transaction_amount: 1010,
                currency_id: "ARS"
            },
            back_url: "https://google.com.ar",
            payer_email: "test_user_20799162@testuser.com"
        };
        const subscription = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        return subscription.data.init_point;
    }

    // async getPayment(id) {
    //     mercadopago.configure({
    //         access_token: process.env.ACCESS_TOKEN
    //     });

    //     let request = mercadopago.payment.findById(id)
    //         .then(function (data) {
    //             if(data.body.status){
    //                 sheet.venta = {
    //                     id: id,
    //                     titulo: data.body.description,
    //                     monto: data.body.transaction_amount,
    //                     estado: "pendiente",
    //                 }
    //                 serviceGoogle.insertVentas(sheet.id, sheet.tituloSolapa, sheet.venta)
    //                 return true
    //             }
    //         }).catch(function (error) {
    //             console.log(error)
    //         });
    //     return request
    // }

};

module.exports = MercadoPagoService;