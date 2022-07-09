const webpush = require('web-push')

const publicVapidKey = 'BMrfFtMtL9IWl9vchDbbbYzJlbQwplyZ_fbv8Pei8gPNna_Dr1O-Ng7U7fy0LLqz5RKIxEytTIzyk6TLrcKbN30';
const privateVapidKey = 'E5gpbs9Y6r5TscHC64Ce9-hXojA9I1qQL0kuvX8Jz5Y';

module.exports = () => {
    webpush.setVapidDetails(
        'mailto:test@test.com', // The email is required and needed in case your VAPID keys have been abused and the browser vendor needs to contact you
        publicVapidKey,
        privateVapidKey,
    );
};