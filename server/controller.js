const axios = require('axios');

let products = [];

// axios.get('/api/inventory').then(res => {
//     products = res.data.results
// })

module.exports = {

getAll: (req, res, next ) => {
    const db = req.app.get('db');
    db.get_inventory()
        res.status(200).json(products)
        // console.log()

    // .catch( err => {
    //     res.status(500).send({errorMessage: "Oops! Sumpin' messed up..."});
    //     console.log(err)
    // });
    
}
}