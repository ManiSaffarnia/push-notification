const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionModel = new Schema({
    endpoint: { type: String, unique: true, required: true },
    expirationTime: { type: Number, required: false },
    keys: {
        auth: String,
        p256dh: String,
    },
});

const Subscription = mongoose.model('subscription', SubscriptionModel);

module.exports = {
    SubscriptionModel,
    Subscription
}