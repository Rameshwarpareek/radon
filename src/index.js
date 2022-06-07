const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb://yhJTTbuGICaEbUUY:yhJTTbuGICaEbUUY@cluster0-shard-00-00.stxts.mongodb.net:27017,cluster0-shard-00-01.stxts.mongodb.net:27017,cluster0-shard-00-02.stxts.mongodb.net:27017/test?replicaSet=atlas-lejryl-shard-0&ssl=true&authSource=admin", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
