'use strict';

const productos = require('../../data/product.json')

const products = productos.map(({id, image}) => {
  return{
    file: image,
    productId: id,
    createdAt: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Images', products, {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Images', null, {});
    
  }
};
