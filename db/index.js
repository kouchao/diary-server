const mongoose = require('./config');
const User = require('./user').bind(mongoose);
const Diary = require('./diary').bind(mongoose);

module.exports = {
    User,
    Diary
}

