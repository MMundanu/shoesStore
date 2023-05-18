'use strict';

const tallas = require('../../data/talle.json')

const talles = tallas.map(talle => {
  return{
    talle: talle,
    createdAt: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
   
    await queryInterface.bulkInsert('Talles', talles, {});
    
  
  },

  async down (queryInterface, Sequelize) {
    
    
   await queryInterface.bulkDelete('Talles', null, {});
     
  }
};
