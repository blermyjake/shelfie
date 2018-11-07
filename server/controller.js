const axios = require('axios');

let products = [];

// axios.get('/api/inventory').then(res => {
//     products = res.data.results
// })

module.exports = {

getAll: (req, res, next ) => {
    const db = req.app.get('db');
    db.Get_Inventory().then(response=>{
        res.status(200).json(response)
    
    })
},


update: (req, res, next ) => {
        // 
        const dbInstance = req.app.get('db');
        const { params, query } = req;

        dbInstance.update_product([ params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: "Nope! Sumpin' messed up..."});
            console.log(err)
        });
    },

    create: (req, res) =>{
        const {text, time } = req.body;
// It should then push this new messsage object into the messages array.
        messages.push({id, text, time });
//After a new message object is created, id should be incremented by one so that the previous id won't be used on any other future messages. This will effectively keep the id unique for every message. 
        id++;
// We'll then want to send the updated messages array.
        res.status(200).send( messages );
    },
// The read method should return the entire messages array. 200 is the error protocols whereas 200 let's you know it worked.
    read: (req, res)=>{
        res.status(200).send( messages );
    },

}