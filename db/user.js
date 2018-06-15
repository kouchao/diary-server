const User = {
    bind(mongoose){
        return mongoose.model('user', {
            name: {
                type: String,
                required: true
            }
        });
    }
}
// const kitty = new User({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
module.exports = User