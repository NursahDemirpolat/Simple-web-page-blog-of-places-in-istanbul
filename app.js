//sunucuyu node.js ile oluşturmuştuk şimdi aynı sunucuyu express ile oluşturcaz.
//nodemon script veya nodemon app ile nodemonu aktif hale getiririz
const express = require('express') //express paketini kullanabilmek için
const exphbs  = require('express-handlebars')
const app = express() //express uygulaması oluşturuyoruz
const port = 3000
const hostname='127.0.0.1'
const mongoose = require('mongoose')
const bodyParser = require('body-parser') //req.body i bunun sayesinde yapıyoruz,oda girilen bilgielri serverda tutmak yerine onları kullanabilmemizi sağlıyo
 
mongoose.connect('mongodb://127.0.0.1/nodedb', { //bir bağlantı oluşturulur
  useNewUrlParser: true, //birbirinin replication hatasını engellemek için kullanılır
  useUnifiedTopology: true,
  useCreateIndex: true  //DeprecationWarning hatasını giderdik
})

app.engine('handlebars', exphbs()) //kullancığımız engine nin adı handlebars,fonsiyon olarak parametre alma handlebarsın kendisinden gelir
app.set('view engine', 'handlebars') 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) //body clasına bağlı olan urlencoded komutunu kullanıyoruz
// parse application/json
app.use(bodyParser.json())  //main.js de kullanıldı

const main = require('./routes/main.js')
app.use('/', main) //bu sayfayı açtığından itibaren maini çalıştırcak
const users = require('./routes/users')
app.use('/users', users) 
const posts = require('./routes/posts')
app.use('/posts', posts) 

// catch 404 and forward to error handler
app.use(function (req, res, next) { //middleware
    var err = new Error('Web Not Found');
    err.status = 404;
    next(err);
});
  
// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
   res.send(err.message);
})

app.listen(port,hostname,() => {
    (console.log(`Server calışıyor , http://${hostname}:${port}/`))
})

