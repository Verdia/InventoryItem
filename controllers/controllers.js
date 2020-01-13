const mongoose = require('mongoose')
const models = require('../models/models')
const User = mongoose.model("user")

exports.regist = function(req,res) {
    console.log(req.body)
    var user = new User(req.body)
    user.save( err => {
        if(err) {
            res.sendStatus(400)
            return
        }
        res.sendStatus(200)
    })
}

exports.listUser = function(req,res){
    User.find({},(err,data)=> {
        if(err){
            res.send(err);
            return
        }
        res.send(data)
    })
}

exports.login = function(req,res) {
    console.log(req.body)
    User.find({
        email: req.body.email,
        password: req.body.password
    }, (err,data)=> {
        if(err){
            res.sendStatus(400);
            return
        }
        if(data.length < 1){
            res.sendStatus(400)
            return
        }
        res.send(data)
    })
}
