module.exports = {

getAll: (req, res, next ) => {
    const shelfieDB = req.app.get('db');

    shelfieDB.read_product()
    .then(products => res.status(200).send (products ))
    // .catch( err => {
    //     res.status(500).send({errorMessage: "Oops! Sumpin' messed up..."});
    //     console.log(err)
    // });
},

}