class OperationMP {
    constructor(subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    async PaymentLink(orden) {
        try {
            const paymentLink = await this.subscriptionService.createPaymentLink(orden);
            return paymentLink
        } catch (error) {
            console.log(error);
        }
    }

    async SubscriptionLink() {
        try {
            const paymentSubscriptionLink = await this.subscriptionService.createSubscriptionLink();
            return paymentSubscriptionLink;
        } catch (error) {
            console.log(error);
        }
    }

    async getPayment(id){
        try {
            const payment = await this.subscriptionService.getPayment(id)
            console.log(payment);
            return payment
        } catch (error) {
            
        }
    }

    async refund(id) {
        try {
            const refund = await this.subscriptionService.refund(id);
            return refund
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = OperationMP;