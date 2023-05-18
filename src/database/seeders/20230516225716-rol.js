'use strict';

const gerarquia = ['Administardor', 'Vendedor', 'Usuario'];

const rols = gerarquia.map(rol =>{
  return{
    name: rol,
    createdAt: new Date()

  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Rols', rols, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Rols', null, {});
     
  }
};
