const {post, broadcast} = require('../controller/subscription');

module.exports = (app) => {
    app.post('/subscription', post);
    app.get('/broadcast', broadcast)
};

