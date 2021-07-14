const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    pname:{type:String, require: true}, 
    picture:{type:String, require: true, },
    description:{type:String, require: true,},
    price: {type:String, require: true},
    adress: {type:String, require: true},
    district: {type:String, require: true},
})
  
module.exports = mongoose.model('Post',PostSchema) 