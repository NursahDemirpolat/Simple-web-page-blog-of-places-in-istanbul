//Yönlendirmeleri bi yerde topladık
const express = require('express')
const router = express.Router()  //expressin içinden routher clasını getirecek
//routher classı gerekli yönlendirmeleri yapmak için bu class miidleware ile gerekli yönlendirme yapıcaz
const Post = require('../models/Post')

router.get('/',(req,res) =>{
    res.render('barslar/homepage')
})

router.get('/post',(req,res) =>{
    res.render('barslar/post')
})

router.get('/homepage',(req,res) =>{
    res.render('barslar/homepage')
})

router.get('/about',(req,res) =>{
    res.render('barslar/about')
})

router.get('/blog',(req,res) =>{
    Post.find({}).then(posts=>{
        res.render('barslar/blog',{posts:posts})
    })
})

//export edebilmesi için
module.exports = router