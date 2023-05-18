const db = require('../database/models');

module.exports = {
    index: (req, res) => {
        
        
        const allProducts = db.Product.findAll();

        


        .then(products => {
             res.send( products )
        })
        .catch(error => console.log(error))
    }
}
