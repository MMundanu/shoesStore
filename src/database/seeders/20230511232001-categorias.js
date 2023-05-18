'use strict';

const categorias = require('../../data/categorias.json')

const categories = categorias.map(category => {
  return {
    name: category,
    createdAt: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Categories', categories, {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
