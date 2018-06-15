const apiUser = require('../api').user;
const user = {
    bind(Router) {
        Router.get('/getAllUser', apiUser.getAllUser)
        Router.post('/addUser', apiUser.addUser)
    }
}

module.exports = user