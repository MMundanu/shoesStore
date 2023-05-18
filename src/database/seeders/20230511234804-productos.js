'use strict';

const productos = require('../../data/product.json')

const products = productos.map(({name, description, price, categoriesId}) => {
  return{
    name,
    description,
    price,
    discount: 0,
    categoriesId,
    createdAt: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Products', products, {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Products', null, {});
    
  }
};
