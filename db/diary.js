const Diary = {
    bind(mongoose){
        return mongoose.model('diary', {
            content: String,
            weather: String,
            createTime: Date,
            updateTime: Date
        });
    }
}

module.exports = Diary