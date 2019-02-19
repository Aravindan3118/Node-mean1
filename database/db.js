const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanCrud', (err) => {
    if(!err){
        console.log('mongo db connected');
    }
    else{
        console.log('Mongo db error '+JSON.stringify(err, undefined, 2));
    }
})

module.exports = mongoose;