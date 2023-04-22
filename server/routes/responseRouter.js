const express = require('express');
const router = express.Router();
const responseController = require('../controllers/responseController')

router.get('/success', responseController.approved);
router.get('/pending', responseController.pending);
router.get('/failure', responseController.failure);
router.post('/payments', responseController.notificationPayments);
router.post('/esp', responseController.notificationPayments);




module.exports = router;