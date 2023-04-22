const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController')
router.post('/payment',  serviceController.getPaymentLink);
router.get('/subscription',  serviceController.getSubscriptionLink);

module.exports = router;