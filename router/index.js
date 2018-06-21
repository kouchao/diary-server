const Router = require('koa-router')();
const user = require('./user');
const diary = require('./diary');

[
    user,
    diary
].forEach(o => {
    o.bind(Router)
})


module.exports = Router