const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
    },


    name: {
        type: String,
    },
})

// Define and Export Model

const User = mongoose.model('User', userSchema);
module.exports = User;


