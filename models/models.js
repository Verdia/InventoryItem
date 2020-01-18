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

let Item = new Schema({
    nameItem: {
        type: String,
        required: true,
        max: 50
    },
    codeItem: {
        type: String,
        required: true,
        unique: true,
        min: 3
    },
    locationItem:{
        type: String,
        required: true,
        max: 50
    },
    dateItem: {
        type: String,
        required: true
    },
    picItem: {
        type: String,
        required: true
    },
    idBagianItem: {
        type: String,
        required: true
    },
    statusItem: {
        type: String,
        required: true,
        enum: ["Exist", "Borrowed"]
    }
})

module.exports = mongoose.model("user", User)
module.exports = mongoose.model("item", Item)