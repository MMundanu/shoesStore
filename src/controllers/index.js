const db = require('../database/models');
const { Sequelize } = require("../database/models");


module.exports = {
    index: (req, res) => {
        
        
        let allProducts = db.Product.findAll({
            includes:[{
                association: 'category',
                atributtes: ['id', 'name']
            },
        {
            association: 'images'
        }]
        });

        let categories = db.Category.findAll()

        let productsRandom = db.Product.findAll({
            limit: 4,
            order: Sequelize.literal('rand()'),
            includes:[{
                association: 'category',
                atributtes: ['id', 'name']
            },
        {
            association: 'images'
        }]
        })

        

        Promise.all([allProducts,categories,productsRandom])
        .then(([allProducts, categories,productsRandom]) => {
            return res.render('index', 
            {   allProducts,
                categories,
                productsRandom
            } )
        })
        .catch(error => console.log(error))
    }
}
