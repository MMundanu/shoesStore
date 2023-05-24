const db = require('../database/models');
const { Sequelize } = require("../database/models");
const { Op } = require('sequelize')


module.exports = {
    index: (req, res) => {
        
        
        let allProducts = db.Product.findAll({
            include:[{
                association:"category"
            },
            {
            association: 'images'
            }]
        });

        let categories = db.Category.findAll()

        let productsRandom = db.Product.findAll({
            limit: 4,
            order: Sequelize.literal('rand()'),
            include:[{
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
               {allProducts,
                categories,
                productsRandom
            }
            )
        })
        .catch(error => console.log(error))
    },
    serch: (req, res) => {

        let keyworrd
    }
}
