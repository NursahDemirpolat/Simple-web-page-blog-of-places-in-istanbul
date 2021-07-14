//Yönlendirmeleri bi yerde topladık
const express = require('express')
const router = express.Router()  //expressin içinden routher clasını getirecek
//routher classı gerekli yönlendirmeleri yapmak için bu class miidleware ile gerekli yönlendirme yapıcaz
const User = require('../models/User') //Shceme ulaştık

router.get('/register',(req,res) =>{
  res.render('barslar/register')
})

router.post('/register',(req,res) =>{
  User.create(req.body,(error,user)=>{ //kullanıcı oluştuktan sonra ana sayfaya yönlendirme
    res.redirect("/users/login")
  })
})

router.get('/login',(req,res) =>{
  res.render('barslar/login')
})

router.get('/usereror',(req,res) =>{
  res.render('barslar/usereror')
})

router.post('/login',(req,res) =>{
  const {username,password} = req.body //bodyden gelenleri aldık
  User.findOne({username},(error,user) =>{ //username göre kullanıcıyı bulcak
    if(user){
      if(user.password == password){ //kullanıcı var
        res.redirect('/blog')
      }
      else{   //şifre yanlış
        res.redirect('/users/usereror') 
      }
    }
    else{ //hiç yoksa 
      res.redirect('/users/register')
    }
  })
})

module.exports=router