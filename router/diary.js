const apiUser = require('../api').diary;
const diary = {
    bind(Router) {
        Router.get('/getAllDiary', apiUser.getAllDiary)
        Router.post('/addDiary', apiUser.addDiary)
    }
}

module.exports = diary