var mongoose = require('mongoose')
var Schema = mongoose.Schema;

let User = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    email:{
        type: String,
        unique: true,
        required: true,
        max: 100
    },
    bornDate: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male","Female"]
    }
})

module.exports = mongoose.model("user", User)