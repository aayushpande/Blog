const mongoose = require('mongoose');

const userSchema = new Schema({
    Name: {
        type: String,

    },
    Email: {
        type: String,
    },
    Password: {
        type: String,
    }
});

export default mongoose.model("Register", userSchema)