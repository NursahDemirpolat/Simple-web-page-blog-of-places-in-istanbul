const express = require('express')
const router = express.Router()  //expressin içinden routher clasını getirecek
//routher classı gerekli yönlendirmeleri yapmak için bu class miidleware ile gerekli yönlendirme yapıcaz
const Post = require('../models/Post')

router.get('/:id', (req,res) => {
    Post.findById(req.params.id).then(post=>{
        res.render('barslar/post',{post:post})
    })
})


module.exports=router