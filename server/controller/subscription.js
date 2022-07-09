const { Subscription } = require('../model/subscription');
const webpush = require('web-push')

const post = async (req, res, next) => {
    try {
        const subscription = req.body;
        const newSubscription = new Subscription(subscription);

        try {
            await newSubscription.save();
        }
        catch (ex) {
            return res.status(500).json({
                status: 500,
                message: 'khordim be boshke 🛢',
                details: ex
            })
        }

        // Send 201 - resource created
        res.status(201).json(newSubscription);
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: 'Malidim be cactus 🌵'
        })
    }
}

const broadcast = async (req, res) => {
    try {
        const notificationMessageg = { title: 'سلام گوزل باشماق', body: '🎉 این یک نوتیفیکیشن است 🎉' };

        const subscriptions = await Subscription.find();

        const notifications = [];
        subscriptions.forEach((subscription) => {
            notifications.push(
                webpush.sendNotification(subscription, JSON.stringify(notificationMessageg))
            );
        });
        const response = await Promise.all(notifications);

        res.status(200).json({ message: 'you are getting notification 🔔', response });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: 'Baz Malidim be cactus ke 🌵',
            err: e
        })
    }
}

module.exports = {
    post,
    broadcast
}