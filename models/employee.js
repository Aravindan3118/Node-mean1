const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var empschema = new Schema({
//     name:  {type:String},
//     position: {type:String},
//     office:   {type:String},
//     salary:  {type: Number}
// })

const Employee = mongoose.model('Employee',{
    name:  {type:String},
    position: {type:String},
    office:   {type:String},
    salary:  {type: Number}
},'employees');

module.exports = { Employee };