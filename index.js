const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const { mongoose } = require('./database/db');
const employeeController = require('./router/employee');

app.use(bodyparser.json());

app.use(cors());
app.use('/employees', employeeController);

app.listen(3000,'172.16.6.154',(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('connected');
    }
});