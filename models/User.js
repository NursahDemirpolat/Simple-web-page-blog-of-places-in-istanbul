const mongoose = require('mongoose')

//şema dosyası oluşturucaz,olması istediğimiz dökümana göre
const UserSchema = new mongoose.Schema({
    name:{type:String, require: true}, //require:zorunlu
    username:{type:String, require: true, unique:true}, //unique:primary key gibi sadece 1 tane olabilirler
    password: {type:String, require: true, unique:true},
    email: {type:String, require: true},
    tel: {type:String, require: true},
    date:{type:Date,default:Date.now}
})
  
module.exports = mongoose.model('User',UserSchema) //bunu ana yerde kullanmak için exports etmemiz gerekir