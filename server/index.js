require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive =require('massive');



const port = 4000;



const app = express();
app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING ).then(shelfieDB => {
    app.set('db', shelfieDB)
}).catch(err => console.log(err));


app.get('/api/inventory', controller.getAll);







app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

